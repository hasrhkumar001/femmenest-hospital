import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header({ toggleMobileMenu }) {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <div className="top-bar">
                <div className="top-bar-inner">
                    <div className="top-bar-left">
                        <div className="top-bar-item"><i className="fas fa-phone"></i><a href="tel:09218072466">092180 72466</a></div>
                        <div className="top-bar-item"><i className="fas fa-envelope"></i><a href="mailto:info@femmenest.com">info@femmenest.com</a></div>
                        <div className="top-bar-item"><i className="fas fa-location-dot"></i><span>Karkardooma, Anand Vihar, Delhi</span></div>
                    </div>
                    <div className="top-bar-social">
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
            
            <header>
                <div className="header-inner">
                    <Link to="/" className="logo nav-link">
                        <div className="logo-icon"><i className="fas fa-heart"></i></div>
                        <span className="logo-text">Femme<span>nest</span></span>
                    </Link>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About Us</Link></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#doctors">Doctors</a></li>
                        <li><a href="/#testimonials">Testimonials</a></li>
                        <li><a href="/#faq">Faq's</a></li>
                        <li className="dropdown">
                            <a href="#">Resources <i className="fas fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/pregnancy-chart" className="nav-link"><i className="fas fa-chart-line"></i> Pregnancy Chart</Link></li>
                                <li><a href="#" className="nav-link"><i className="fas fa-blog"></i> Blogs</a></li>
                                <li><a href="#" className="nav-link"><i className="fas fa-images"></i> Gallery</a></li>
                            </ul>
                        </li>
                        <li><a href="/#contact">Contact Us</a></li>
                    </ul>
                    <a href="/#appointment" className="header-cta"><i className="fas fa-calendar-check"></i><span>Book Appointment</span></a>
                    <button className="mobile-toggle" onClick={toggleMobileMenu}><i className="fas fa-bars"></i></button>
                </div>
            </header>
        </>
    );
}

export default Header;
