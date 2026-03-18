import React, { useState } from 'react';

function AppointmentForm() {
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
        patientName: '',
        patientPhone: '',
        patientEmail: '',
        appointmentDate: '',
        department: 'General', // Default or handled differently if there was a dept dropdown
        specialist: '',
        doctor: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedTime) {
            return setStatus({ loading: false, success: false, error: 'Please select a time slot' });
        }

        setStatus({ loading: true, success: false, error: '' });

        try {
            const res = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    appointmentTime: selectedTime
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Failed to book appointment');
            }

            setStatus({ loading: false, success: true, error: '' });
            // Reset form
            setFormData({ patientName: '', patientPhone: '', patientEmail: '', appointmentDate: '', department: 'General', specialist: '', doctor: '' });
            setSelectedTime('');
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    return (
        <section className="appointment-section" id="appointment">
            <div className="container">
                <div className="appointment-wrapper">
                    <div className="appointment-image">
                        <div className="appointment-image-placeholder">
                            <i className="fas fa-baby"></i>
                            <span>Mother & Baby</span>
                        </div>
                    </div>
                    <div className="appointment-form-container">
                        <span className="section-tag">Let's Connect</span>
                        <h2 className="section-title">Your Journey <span className="accent">Starts Here</span></h2>
                        {status.success && <div style={{ color: 'green', marginBottom: '15px' }}>Appointment booked successfully! We will contact you soon.</div>}
                        {status.error && <div style={{ color: 'red', marginBottom: '15px' }}>{status.error}</div>}
                        <form className="appointment-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name <span className="required">*</span></label>
                                <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Enter your full name" required />
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="form-group">
                                <label>Phone Number <span className="required">*</span></label>
                                <input type="tel" name="patientPhone" value={formData.patientPhone} onChange={handleChange} placeholder="Enter your phone number" required />
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="patientEmail" value={formData.patientEmail} onChange={handleChange} placeholder="Enter your email (optional)" />
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="form-group">
                                <label>Select Specialist <span className="required">*</span></label>
                                <select name="specialist" value={formData.specialist} onChange={handleChange} required>
                                    <option value="" disabled>Select Specialist</option>
                                    <option value="Surgery & Radiology">Surgery &amp; Radiology</option>
                                    <option value="Neurology">Neurology</option>
                                    <option value="Angiography">Angiography</option>
                                    <option value="Children Care">Children Care</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                </select>
                                <i className="fas fa-user-md"></i>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Preferred Date</label>
                                    <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
                                    <i className="fas fa-calendar"></i>
                                </div>
                                <div className="form-group">
                                    <label>Select Doctor</label>
                                    <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                                        <option value="" disabled>Choose doctor</option>
                                        <option value="sowjanya">Dr. Sowjanya Aggarwal</option>
                                        <option value="anita-a">Dr. Anita Aggarwal</option>
                                        <option value="anita-j">Dr. Anita Jain</option>
                                        <option value="apoorva">Dr. Apoorva Reddy</option>
                                        <option value="dipti">Dr. Dipti Nabh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Preferred Time Slot</label>
                                <div className="time-slots">
                                    {timeSlots.map((time, i) => (
                                        <div 
                                            key={i} 
                                            className={`time-slot ${selectedTime === time ? 'selected' : ''}`} 
                                            onClick={() => setSelectedTime(time)}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="form-submit">
                                <button type="submit" disabled={status.loading}>
                                    {status.loading ? 'Booking...' : 'Book Appointment'} <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppointmentForm;
