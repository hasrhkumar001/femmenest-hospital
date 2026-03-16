import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function AddUser() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            await axios.post('http://localhost:5000/api/admin/users', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate('/admin/users');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add user');
            setLoading(false);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Link to="/admin/users" style={{ color: 'var(--slate)', textDecoration: 'none', fontSize: '1.2rem' }}><i className="fas fa-arrow-left"></i></Link>
                <h1 style={{ color: 'var(--navy)', margin: 0 }}>Add New User</h1>
            </div>
            
            {error && <div style={{ color: 'white', background: 'var(--hot-pink)', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontWeight: 'bold' }}>{error}</div>}
            
            <form onSubmit={handleSubmit} style={{ background: 'var(--white)', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', maxWidth: '600px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: 'bold' }}>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--grey)', fontSize: '1rem' }} placeholder="e.g. Jane Doe" />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: 'bold' }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--grey)', fontSize: '1rem' }} placeholder="e.g. jane@femmenest.com" />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: 'bold' }}>Temporary Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--grey)', fontSize: '1rem' }} placeholder="Must be securely communicated" />
                </div>
                
                <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--navy)', fontWeight: 'bold' }}>Account Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--grey)', background: 'white', fontSize: '1rem', cursor: 'pointer' }}>
                        <option value="user">Standard User</option>
                        <option value="admin">Administrator (Full Access)</option>
                    </select>
                </div>
                
                <button type="submit" disabled={loading} className="btn-gradient" style={{ width: '100%', padding: '15px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
                    <i className="fas fa-user-plus" style={{ marginRight: '8px' }}></i> {loading ? 'Creating Account...' : 'Create User Account'}
                </button>
            </form>
        </div>
    );
}

export default AddUser;
