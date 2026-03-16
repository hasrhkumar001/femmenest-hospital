import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon"><i className="fas fa-heart"></i></div>
                            <span className="logo-text">Femme<span>nest</span></span>
                        </div>
                        <p>Luxury Boutique Maternity & Women's Hospital. We redefine childbirth with a calm, caring environment.</p>
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About Us</Link></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#doctors">Doctors</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/pregnancy-chart" className="nav-link">Pregnancy Chart</Link></li>
                            <li><a href="#" className="nav-link">Blogs</a></li>
                            <li><a href="#" className="nav-link">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/#services">Maternity Care</a></li>
                            <li><a href="/#services">Gynaecology</a></li>
                            <li><a href="/#services">Infertility/IVF</a></li>
                            <li><a href="/#services">NICU Care</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#"><i className="fas fa-location-dot"></i>A-16, Karkardooma, Delhi</a></li>
                            <li><a href="tel:09218072466"><i className="fas fa-phone"></i>092180 72466</a></li>
                            <li><a href="mailto:info@femmenest.com"><i className="fas fa-envelope"></i>info@femmenest.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2025 Femmenest Hospital. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
