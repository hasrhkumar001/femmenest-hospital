const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: false, // Optional: if someone books as guest
            ref: 'User',
        },
        department: {
            type: String,
            required: true,
        },
        specialist: {
            type: String,
            enum: ['Surgery & Radiology', 'Neurology', 'Angiography', 'Children Care', 'Orthopedics'],
            required: true,
        },
        doctor: {
            type: String, // Or ObjectId ref to Doctor model if you expand
            required: true,
        },
        patientName: {
            type: String,
            required: true,
        },
        patientEmail: {
            type: String,
            required: true,
        },
        patientPhone: {
            type: String,
            required: true,
        },
        appointmentDate: {
            type: String,
            required: true,
        },
        appointmentTime: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
