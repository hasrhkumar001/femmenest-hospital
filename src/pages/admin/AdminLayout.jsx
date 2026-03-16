import React, { useContext } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function AdminLayout() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const isActive = (path) => location.pathname === path ? 'active bg-coral text-white' : 'text-slate hover:bg-peach';

    return (
        <div className="admin-wrapper">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="logo admin-logo">
                    <div className="logo-icon"><i className="fas fa-heart"></i></div>
                    <span className="logo-text" style={{ fontSize: '1.2rem' }}>Femme<span>nest</span> Admin</span>
                </div>
                
                <nav className="admin-nav">
                    <Link to="/admin/dashboard" 
                          style={{ padding: '12px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s' }}
                          className={isActive('/admin/dashboard')}>
                        <i className="fas fa-home" style={{ width: '20px' }}></i> <span>Dashboard</span>
                    </Link>
                    <Link to="/admin/users" 
                          style={{ padding: '12px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s' }}
                          className={isActive('/admin/users')}>
                        <i className="fas fa-users" style={{ width: '20px' }}></i> <span>Users</span>
                    </Link>
                    <Link to="/admin/appointments" 
                          style={{ padding: '12px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s' }}
                          className={isActive('/admin/appointments')}>
                        <i className="fas fa-calendar-check" style={{ width: '20px' }}></i> <span>Appointments</span>
                    </Link>
                    <Link to="/admin/contacts" 
                          style={{ padding: '12px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s' }}
                          className={isActive('/admin/contacts')}>
                        <i className="fas fa-envelope" style={{ width: '20px' }}></i> <span>Contacts</span>
                    </Link>
                </nav>

                <button onClick={handleLogout} className="admin-logout-btn">
                    <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
                </button>
            </aside>

            {/* Main Content Area */}
            <main className="admin-main">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
