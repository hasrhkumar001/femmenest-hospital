const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const Contact = require('../models/Contact');
const jwt = require('jsonwebtoken');

// Simple Middleware to verify admin token
const protectAdmin = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            if (req.user && req.user.role === 'admin') {
                next();
            } else {
                res.status(401).json({ message: 'Not authorized as an admin' });
            }
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// -----------------------------------------------------
// STATISTICS
// -----------------------------------------------------
router.get('/stats', protectAdmin, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({});
        const totalAppointments = await Appointment.countDocuments({});
        const pendingAppointments = await Appointment.countDocuments({ status: 'pending' });
        const totalLeads = await Contact.countDocuments({});

        res.json({
            users: totalUsers,
            appointments: totalAppointments,
            pendingAppointments,
            leads: totalLeads
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// -----------------------------------------------------
// USERS CRUD
// -----------------------------------------------------
router.get('/users', protectAdmin, async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/users/:id', protectAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/users', protectAdmin, async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: role || 'user',
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/users/:id', protectAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.role = req.body.role || user.role;
            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/users/:id', protectAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// -----------------------------------------------------
// APPOINTMENTS CRUD
// -----------------------------------------------------
router.get('/appointments', protectAdmin, async (req, res) => {
    try {
        const appointments = await Appointment.find({}).sort('-createdAt');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/appointments/:id', protectAdmin, async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (appointment) {
            appointment.status = req.body.status || appointment.status;
            const updatedAppointment = await appointment.save();
            res.json(updatedAppointment);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/appointments/:id', protectAdmin, async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// -----------------------------------------------------
// CONTACTS (LEADS) CRUD
// -----------------------------------------------------
router.get('/contacts', protectAdmin, async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort('-createdAt');
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/contacts/:id', protectAdmin, async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
