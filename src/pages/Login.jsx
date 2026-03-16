import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assume backend runs on port 5000
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            if (res.data.token) {
                login(res.data.token);
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <section className="appointment-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="appointment-form-container" style={{ padding: '40px', background: 'var(--white)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div className="logo" style={{ justifyContent: 'center', marginBottom: '15px' }}>
                            <div className="logo-icon"><i className="fas fa-heart"></i></div>
                            <span className="logo-text">Femme<span>nest</span></span>
                        </div>
                        <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Admin <span className="accent">Login</span></h2>
                    </div>
                    
                    {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</div>}
                    
                    <form className="appointment-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Admin Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter admin email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="form-group" style={{ marginTop: '20px' }}>
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="form-submit" style={{ marginTop: '30px' }}>
                            <button type="submit" style={{ width: '100%' }}>Login to Dashboard</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
