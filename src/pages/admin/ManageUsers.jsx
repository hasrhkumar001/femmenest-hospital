import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/users', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(users.filter(u => u._id !== id));
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user");
            }
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: 'var(--navy)', margin: 0 }}>Manage Users</h1>
                <Link to="/admin/users/add" className="btn-gradient" style={{ padding: '10px 20px', fontSize: '0.9rem', textDecoration: 'none' }}>+ Add User</Link>
            </div>

            {loading ? <p>Loading users...</p> : (
                <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', boxShadow: 'var(--shadow-md)', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--grey)', color: 'var(--navy)' }}>
                                <th style={{ padding: '15px 10px' }}>Name</th>
                                <th style={{ padding: '15px 10px' }}>Email</th>
                                <th style={{ padding: '15px 10px' }}>Role</th>
                                <th style={{ padding: '15px 10px' }}>Created</th>
                                <th style={{ padding: '15px 10px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: 'var(--slate)' }}>No users found.</td>
                                </tr>
                            ) : users.map(user => (
                                <tr key={user._id} style={{ borderBottom: '1px solid var(--off-white)' }}>
                                    <td style={{ padding: '15px 10px', fontWeight: '500' }}>{user.name}</td>
                                    <td style={{ padding: '15px 10px' }}>{user.email}</td>
                                    <td style={{ padding: '15px 10px' }}>
                                        <span style={{ 
                                            padding: '5px 10px', 
                                            borderRadius: '20px', 
                                            fontSize: '0.8rem',
                                            background: user.role === 'admin' ? 'var(--coral)' : 'var(--blue)', 
                                            color: 'var(--white)' 
                                        }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: '15px 10px', fontSize: '0.9rem', color: 'var(--slate)' }}>
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '15px 10px' }}>
                                        <Link to={`/admin/users/edit/${user._id}`} style={{ color: 'var(--blue)', cursor: 'pointer', marginRight: '15px', textDecoration: 'none' }} title="Edit User">
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <button onClick={() => handleDelete(user._id)} style={{ background: 'none', border: 'none', color: 'var(--hot-pink)', cursor: 'pointer' }} title="Delete User">
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

export default ManageUsers;
