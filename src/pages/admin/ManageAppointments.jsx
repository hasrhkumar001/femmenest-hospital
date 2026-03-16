import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function ManageAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/appointments', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAppointments(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching appointments:", error);
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            await axios.put(`http://localhost:5000/api/admin/appointments/${id}`, 
                { status },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchAppointments(); // Refresh the list
        } catch (error) {
            console.error("Error updating appointment:", error);
            alert("Failed to update status");
        }
    };
    
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            try {
                await axios.delete(`http://localhost:5000/api/admin/appointments/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAppointments(appointments.filter(a => a._id !== id));
            } catch (error) {
                console.error("Error deleting appointment:", error);
                alert("Failed to delete appointment");
            }
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'confirmed': return 'var(--purple)';
            case 'completed': return 'var(--blue)';
            case 'cancelled': return 'var(--hot-pink)';
            default: return 'var(--coral)'; // pending
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: 'var(--navy)', margin: 0 }}>Manage Appointments</h1>
                <p style={{ color: 'var(--slate)', marginTop: '5px' }}>Review and update patient bookings.</p>
            </div>

            {loading ? <p>Loading appointments...</p> : (
                <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', boxShadow: 'var(--shadow-md)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--grey)', color: 'var(--navy)' }}>
                                <th style={{ padding: '15px 10px' }}>Patient Details</th>
                                <th style={{ padding: '15px 10px' }}>Date & Time</th>
                                <th style={{ padding: '15px 10px' }}>Doctor</th>
                                <th style={{ padding: '15px 10px' }}>Status</th>
                                <th style={{ padding: '15px 10px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.length === 0 ? (
                                <tr>
                                    <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: 'var(--slate)' }}>No appointments found.</td>
                                </tr>
                            ) : appointments.map(apt => (
                                <tr key={apt._id} style={{ borderBottom: '1px solid var(--off-white)' }}>
                                    <td style={{ padding: '15px 10px' }}>
                                        <div style={{ fontWeight: '600' }}>{apt.patientName}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>{apt.patientEmail}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>{apt.patientPhone}</div>
                                    </td>
                                    <td style={{ padding: '15px 10px' }}>
                                        <div style={{ fontWeight: '500' }}>{new Date(apt.appointmentDate).toLocaleDateString()}</div>
                                        <div style={{ color: 'var(--coral)', fontSize: '0.9rem' }}><i className="far fa-clock"></i> {apt.appointmentTime}</div>
                                    </td>
                                    <td style={{ padding: '15px 10px', fontWeight: '500' }}>{apt.doctor}</td>
                                    <td style={{ padding: '15px 10px' }}>
                                        <select 
                                            value={apt.status} 
                                            onChange={(e) => handleUpdateStatus(apt._id, e.target.value)}
                                            style={{ 
                                                padding: '6px 10px', 
                                                borderRadius: '20px', 
                                                border: '1px solid var(--grey)',
                                                background: 'transparent',
                                                color: getStatusColor(apt.status),
                                                fontWeight: 'bold',
                                                textTransform: 'capitalize'
                                            }}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="confirmed">Confirmed</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td style={{ padding: '15px 10px' }}>
                                        <button onClick={() => handleDelete(apt._id)} style={{ background: 'none', border: 'none', color: 'var(--hot-pink)', cursor: 'pointer', padding: '5px' }} title="Delete Appointment">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ManageAppointments;
