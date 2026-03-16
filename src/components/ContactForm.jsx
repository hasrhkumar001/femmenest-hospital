import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Failed to submit enquiry');
            }

            setStatus({ loading: false, success: true, error: '' });
            // Reset form
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

    return (
        <section className="contact-form-section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <span className="section-tag" style={{ color: '#ff2d55', fontWeight: 'bold' }}>Get In Touch</span>
                    <h2 className="section-title">Send Us an Enquiry</h2>
                </div>
                
                {status.success && <div style={{ color: 'green', marginBottom: '15px', textAlign: 'center' }}>Your enquiry has been sent safely! We will contact you soon.</div>}
                {status.error && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{status.error}</div>}
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formRow}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Your Name <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email Address <span style={{ color: 'red' }}>*</span></label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                        </div>
                    </div>
                    
                    <div style={styles.formRow}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Subject <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={styles.input} />
                        </div>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Your Message <span style={{ color: 'red' }}>*</span></label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...styles.input, minHeight: '120px' }}></textarea>
                    </div>

                    <button type="submit" disabled={status.loading} style={styles.button}>
                        {status.loading ? 'Sending...' : 'Send Enquiry'}
                    </button>
                </form>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '60px 0',
        backgroundColor: '#f6f9fc'
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    formRow: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
    },
    formGroup: {
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
    label: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#444'
    },
    input: {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '16px',
        outline: 'none',
        transition: 'border-color 0.3s'
    },
    button: {
        backgroundColor: '#ff2d55',
        color: 'white',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        alignSelf: 'center',
        marginTop: '10px',
        minWidth: '200px'
    }
};

export default ContactForm;
