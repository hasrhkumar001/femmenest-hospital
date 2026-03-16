const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendBookingConfirmationEmail = async (patientEmail, patientName, appointmentDate, appointmentTime) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: patientEmail,
            subject: 'Appointment Booking Confirmation - FemmeNest',
            html: `
                <h3>Hello ${patientName},</h3>
                <p>Your appointment has been successfully booked!</p>
                <p><strong>Date:</strong> ${appointmentDate}</p>
                <p><strong>Time:</strong> ${appointmentTime}</p>
                <br/>
                <p>Thank you for choosing FemmeNest.</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

const sendEnquiryConfirmationEmail = async (email, name) => {
     try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your enquiry - FemmeNest',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for contacting us. We have received your enquiry and will get back to you shortly.</p>
                <br/>
                <p>Best regards,</p>
                <p>The FemmeNest Team</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

// Dummy SMS function for testing
const sendSMS = async (phone, message) => {
    console.log(`[SMS MOCK] Sending to ${phone}: ${message}`);
    // Real implementation would use Twilio client here
    return true;
}

module.exports = {
    sendBookingConfirmationEmail,
    sendEnquiryConfirmationEmail,
    sendSMS
};
