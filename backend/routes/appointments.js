const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { sendBookingConfirmationEmail, sendSMS } = require('../utils/notifications');

// @route   POST /api/appointments
// @desc    Book a new appointment
// @access  Public (or semi-private if user is logged in)
router.post('/', async (req, res) => {
    try {
        const { department, doctor, patientName, patientEmail, patientPhone, appointmentDate, appointmentTime, user } = req.body;

        const appointment = await Appointment.create({
            department,
            doctor,
            patientName,
            patientEmail,
            patientPhone,
            appointmentDate,
            appointmentTime,
            user: user || null
        });

        // Send notifications asynchronously
        sendBookingConfirmationEmail(patientEmail, patientName, appointmentDate, appointmentTime);
        sendSMS(patientPhone, `Your FemmeNest appointment is booked for ${appointmentDate} at ${appointmentTime}.`);

        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   GET /api/appointments
// @desc    Get all appointments
// @access  Private/Admin (middleware to be implemented in server.js or here)
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find({}).sort('-createdAt');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
