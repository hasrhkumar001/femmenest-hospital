import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, toggleMenu }) {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <>
            <div 
                className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
            ></div>
            
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="logo">
                        <div className="logo-icon"><i className="fas fa-heart"></i></div>
                        <span className="logo-text">Femme<span>nest</span></span>
                    </div>
                    <button className="mobile-menu-close" onClick={toggleMenu}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <ul>
                    <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" className="nav-link" onClick={toggleMenu}>About Us</Link></li>
                    <li><a href="/#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="/#doctors" onClick={toggleMenu}>Doctors</a></li>
                    <li><a href="/#testimonials" onClick={toggleMenu}>Testimonials</a></li>
                    <li><a href="/#faq" onClick={toggleMenu}>FAQ's</a></li>
                    <li className={`mobile-dropdown ${isResourcesOpen ? 'active' : ''}`}>
                        <a href="#" className="mobile-dropdown-toggle" onClick={(e) => { e.preventDefault(); setIsResourcesOpen(!isResourcesOpen); }}>
                            Resources <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className="mobile-dropdown-menu">
                            <li><Link to="/pregnancy-chart" className="nav-link" onClick={toggleMenu}><i className="fas fa-chart-line"></i> Pregnancy Chart</Link></li>
                            <li><a href="#" className="nav-link" onClick={toggleMenu}><i className="fas fa-blog"></i> Blogs</a></li>
                            <li><a href="#" className="nav-link" onClick={toggleMenu}><i className="fas fa-images"></i> Gallery</a></li>
                        </ul>
                    </li>
                    <li><a href="/#contact" onClick={toggleMenu}>Contact Us</a></li>
                </ul>
            </div>
        </>
    );
}

export default MobileMenu;
