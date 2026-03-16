import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO 
                title="About Us | FemmeNest Hospital"
                description="Learn about FemmeNest Hospital's mission, vision, and our team of expert doctors providing the best maternity and gynaecology care in Delhi."
            />
            <section className="page-hero">
                <div className="container">
                    <h1>About <span className="accent">Femmenest</span> Hospital</h1>
                    <div className="breadcrumb">
                        <Link to="/" className="nav-link">Home</Link>
                        <i className="fas fa-chevron-right"></i>
                        <span>About Us</span>
                    </div>
                </div>
            </section>
            
            <section className="about-intro">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-images">
                            <div className="about-image-main">
                                <div className="about-image-placeholder">
                                    <i className="fas fa-hospital-user"></i>
                                    <span>Hospital Interior</span>
                                </div>
                            </div>
                            <div className="about-badge">
                                <span className="num">35+</span>
                                <span className="txt">Years of<br/>Experience</span>
                            </div>
                        </div>
                        <div className="about-content">
                            <span className="section-tag">About Us</span>
                            <h2 className="section-title">Best Delivery Hospital in <span className="accent">Delhi</span></h2>
                            <p className="about-text">At Femme Nest Hospital, we redefine childbirth with a calm, caring, and medically advanced environment. Our luxury maternity suites offer a home-like atmosphere while ensuring immediate access to modern medical technology.</p>
                            <p className="about-text">As the best pregnancy care hospital in Delhi, we are committed to providing world-class care for every mother and child. We specialise in:</p>
                            <div className="about-features">
                                <div className="about-feature">
                                    <div className="about-feature-icon"><i className="fas fa-syringe"></i></div>
                                    <span>Painless Delivery</span>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><i className="fas fa-scissors"></i></div>
                                    <span>Safe & Planned C-Section</span>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><i className="fas fa-baby"></i></div>
                                    <span>Advanced Level-III NICU</span>
                                </div>
                                <div className="about-feature">
                                    <div className="about-feature-icon"><i className="fas fa-heart-pulse"></i></div>
                                    <span>High-Risk Pregnancy Care</span>
                                </div>
                            </div>
                            <a href="/#appointment" className="btn-gradient nav-link">
                                <i className="fas fa-phone-volume"></i>
                                <span>24/7 For Emergencies</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mission-vision">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card">
                            <div className="mv-icon"><i className="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To provide compassionate, personalized, and world-class healthcare services to women and newborns, ensuring every mother experiences a safe, comfortable, and memorable journey to motherhood.</p>
                        </div>
                        <div className="mv-card">
                            <div className="mv-icon"><i className="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To be recognized as the most trusted maternity and women's healthcare destination in Delhi NCR, known for clinical excellence, patient-centered care, and innovative medical practices.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="why-choose">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Why Choose Us</span>
                        <h2 className="section-title">What Makes Us <span className="accent">Different</span></h2>
                        <p className="section-subtitle">We combine medical excellence with personalized care to make your journey to motherhood truly special.</p>
                    </div>
                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-user-doctor"></i></div>
                            <h3>Expert Specialists</h3>
                            <p>Experienced obstetricians and gynaecologists with decades of expertise in maternal and fetal medicine.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-hospital"></i></div>
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art infrastructure with luxury suites, advanced operation theaters, and Level III NICU.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-hand-holding-heart"></i></div>
                            <h3>Compassionate Care</h3>
                            <p>We treat every patient like family, providing emotional support alongside medical excellence.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-clock"></i></div>
                            <h3>24/7 Availability</h3>
                            <p>Round-the-clock emergency services with doctors and specialists always available.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-sack-dollar"></i></div>
                            <h3>Affordable Packages</h3>
                            <p>Transparent pricing with comprehensive maternity packages that include all essential services.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon"><i className="fas fa-award"></i></div>
                            <h3>Trusted Excellence</h3>
                            <p>Recognized with 5.0 Google rating from hundreds of happy families who trusted us.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">35+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15K+</div>
                            <div className="stat-label">Safe Deliveries</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Expert Doctors</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5.0</div>
                            <div className="stat-label">Google Rating</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="cta-section" style={{ background: 'var(--navy)' }}>
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Start Your Journey?</h2>
                    <p className="cta-text">Book a consultation with our expert team and experience the Femmenest difference in maternity care.</p>
                    <div className="cta-buttons">
                        <a href="/#appointment" className="cta-btn-gradient nav-link">
                            <i className="fas fa-calendar-check"></i>
                            <span>Book Appointment</span>
                        </a>
                        <a href="tel:09218072466" className="cta-btn-outline">
                            <i className="fas fa-phone"></i>
                            <span>092180 72466</span>
                        </a>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </>
    );
}

export default About;
