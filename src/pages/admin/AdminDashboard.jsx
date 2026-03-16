import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [stats, setStats] = useState({ users: 0, appointments: 0, contacts: 0 });
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // We're simulating stats by fetching array lengths. 
                // In a real production app, create a dedicated /api/admin/stats endpoint
                const [usersRes, aptsRes, contRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/admin/users', { headers: { Authorization: `Bearer ${token}` } }),
                    axios.get('http://localhost:5000/api/admin/appointments', { headers: { Authorization: `Bearer ${token}` } }),
                    axios.get('http://localhost:5000/api/admin/contacts', { headers: { Authorization: `Bearer ${token}` } })
                ]);
                
                setStats({
                    users: usersRes.data.length,
                    appointments: aptsRes.data.length,
                    contacts: contRes.data.length
                });
            } catch (error) {
                console.error("Failed to load dashboard stats", error);
            }
        };
        
        fetchStats();
    }, [token]);

    return (
        <div>
            <h1 style={{ color: 'var(--navy)', marginBottom: '5px' }}>Welcome Back, Admin</h1>
            <p style={{ color: 'var(--slate)', marginBottom: '40px' }}>Here's what's happening at Femmenest today.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div style={{ background: 'linear-gradient(135deg, var(--soft-pink) 0%, #fff 100%)', padding: '30px', borderLeft: '4px solid var(--hot-pink)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ color: 'var(--slate)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Users</span>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--navy)', margin: '10px 0' }}>{stats.users}</h2>
                        </div>
                        <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hot-pink)', fontSize: '1.2rem', boxShadow: '0 5px 15px rgba(255,105,180,0.2)' }}>
                            <i className="fas fa-users"></i>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #fff 100%)', padding: '30px', borderLeft: '4px solid var(--blue)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ color: 'var(--slate)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Appointments</span>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--navy)', margin: '10px 0' }}>{stats.appointments}</h2>
                        </div>
                        <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', fontSize: '1.2rem', boxShadow: '0 5px 15px rgba(0,186,211,0.2)' }}>
                            <i className="fas fa-calendar-check"></i>
                        </div>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #fff 100%)', padding: '30px', borderLeft: '4px solid var(--coral)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ color: 'var(--slate)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Inquiries</span>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--navy)', margin: '10px 0' }}>{stats.contacts}</h2>
                        </div>
                        <div style={{ width: '50px', height: '50px', background: 'var(--white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--coral)', fontSize: '1.2rem', boxShadow: '0 5px 15px rgba(255,111,97,0.2)' }}>
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-dashboard-grid">
                <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ color: 'var(--navy)', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-calendar-plus" style={{ color: 'var(--blue)' }}></i> Recent Actions
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li style={{ padding: '15px', background: 'var(--off-white)', borderRadius: '8px', display: 'flex', gap: '15px' }}>
                            <div style={{ color: 'var(--coral)' }}><i className="fas fa-bell"></i></div>
                            <div>
                                <strong>System Update:</strong> Backend successfully migrated to internal react-app directory.
                            </div>
                        </li>
                        <li style={{ padding: '15px', background: 'var(--off-white)', borderRadius: '8px', display: 'flex', gap: '15px' }}>
                            <div style={{ color: 'var(--hot-pink)' }}><i className="fas fa-shield-alt"></i></div>
                            <div>
                                <strong>Security:</strong> Protected logic properly shielding internal endpoints.
                            </div>
                        </li>
                    </ul>
                </div>

                <div style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    <h3 style={{ color: 'var(--navy)', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-bolt" style={{ color: 'var(--coral)' }}></i> Quick Links
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Link to="/admin/appointments" style={{ padding: '15px', border: '1px solid var(--grey)', borderRadius: '8px', color: 'var(--navy)', textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}>
                            <span>View Today's Appointments</span>
                            <i className="fas fa-arrow-right" style={{ color: 'var(--slate)' }}></i>
                        </Link>
                        <Link to="/admin/contacts" style={{ padding: '15px', border: '1px solid var(--grey)', borderRadius: '8px', color: 'var(--navy)', textDecoration: 'none', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Read New Messages</span>
                            <i className="fas fa-arrow-right" style={{ color: 'var(--slate)' }}></i>
                        </Link>
                        <Link to="/" target="_blank" style={{ padding: '15px', border: '1px solid var(--grey)', borderRadius: '8px', color: 'var(--navy)', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', background: 'var(--soft-pink)' }}>
                            <span style={{ color: 'var(--hot-pink)', fontWeight: 'bold' }}>View Live Website <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
