import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function ManageContacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/contacts', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setContacts(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await axios.delete(`http://localhost:5000/api/admin/contacts/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setContacts(contacts.filter(c => c._id !== id));
            } catch (error) {
                console.error("Error deleting contact:", error);
                alert("Failed to delete contact");
            }
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ color: 'var(--navy)', margin: 0 }}>Contact Inquiries</h1>
                <p style={{ color: 'var(--slate)', marginTop: '5px' }}>Messages from website forms.</p>
            </div>

            {loading ? <p>Loading messages...</p> : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {contacts.length === 0 ? (
                        <div style={{ background: 'var(--white)', padding: '20px', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'var(--slate)' }}>
                            No messages found.
                        </div>
                    ) : contacts.map(contact => (
                        <div key={contact._id} style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                                <button onClick={() => handleDelete(contact._id)} style={{ background: 'var(--soft-pink)', color: 'var(--hot-pink)', border: 'none', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--off-white)', color: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    {contact.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 style={{ margin: '0 0 5px 0', color: 'var(--navy)' }}>{contact.name}</h3>
                                    <div style={{ display: 'flex', gap: '15px', color: 'var(--slate)', fontSize: '0.9rem' }}>
                                        <span><i className="fas fa-envelope"></i> {contact.email}</span>
                                        {contact.phone && <span><i className="fas fa-phone"></i> {contact.phone}</span>}
                                        <span><i className="fas fa-clock"></i> {new Date(contact.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{ background: 'var(--off-white)', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--coral)', color: 'var(--navy)', lineHeight: 1.6 }}>
                                "{contact.message}"
                            </div>
                            
                            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--grey)', display: 'flex', gap: '10px' }}>
                                <a href={`mailto:${contact.email}`} className="btn-gradient" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', fontSize: '0.85rem' }}>
                                    <i className="fas fa-reply"></i> Reply by Email
                                </a>
                                {contact.phone && (
                                    <a href={`https://wa.me/${contact.phone.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 15px', fontSize: '0.85rem', borderColor: '#25D366', color: '#25D366' }}>
                                        <i className="fab fa-whatsapp"></i> WhatsApp
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ManageContacts;
