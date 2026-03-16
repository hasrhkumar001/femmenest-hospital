import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('adminToken'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            localStorage.setItem('adminToken', token);
            // Decode simple token or fetch user info if needed
            setUser({ role: 'admin' });
        } else {
            localStorage.removeItem('adminToken');
            setUser(null);
        }
    }, [token]);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
