const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendEnquiryConfirmationEmail } = require('../utils/notifications');

// @route   POST /api/contact
// @desc    Submit a contact enquiry / lead
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            phone,
            subject,
            message
        });

        // Send auto-reply
        sendEnquiryConfirmationEmail(email, name);

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   GET /api/contact
// @desc    Get all active leads/enquiries
// @access  Private/Admin
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort('-createdAt');
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
