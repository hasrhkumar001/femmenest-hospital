const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['new', 'in-progress', 'resolved'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
