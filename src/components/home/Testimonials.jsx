import React from 'react';

function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header testimonials-header">
                    <span className="section-tag">Happy Moms, Happy Babies</span>
                    <h2 className="section-title">Don't Take Our Word. <span className="accent">Take Theirs.</span></h2>
                    <p className="section-subtitle">Real moms. Real stories. Real tears of joy.</p>
                </div>
            </div>
            <div className="testimonials-slider-container">
                <div className="testimonials-slider">
                    <div className="testimonials-track">
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Riya M.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Femmenest made my pregnancy journey so much easier. The guidance, care, and constant support gave me confidence every day."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Sophia M.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"From the first consultation to delivery, I felt safe, supported, and cared for. Truly a wonderful experience with Femmenest."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Emily R.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Expertise, and genuine care — they were with me through every step of my journey."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Hannah W.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Completely transformed my view on hospital care. Femmenest felt more like family than a hospital."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Priya S.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"The doctors and staff were incredibly supportive during my high-risk pregnancy. Forever grateful!"</p>
                        </div>
                        
                        {/* Duplicate for infinite scroll */}
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Riya M.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Femmenest made my pregnancy journey so much easier. The guidance, care, and constant support gave me confidence every day."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Sophia M.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"From the first consultation to delivery, I felt safe, supported, and cared for. Truly a wonderful experience with Femmenest."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Emily R.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Expertise, and genuine care — they were with me through every step of my journey."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Hannah W.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"Completely transformed my view on hospital care. Femmenest felt more like family than a hospital."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <div className="testimonial-header">
                                <div className="testimonial-avatar"><i className="fas fa-user"></i></div>
                                <div className="testimonial-author-info"><h5>– Priya S.</h5><span>Patients</span></div>
                            </div>
                            <i className="fas fa-quote-right testimonial-quote-icon"></i>
                            <p className="testimonial-text">"The doctors and staff were incredibly supportive during my high-risk pregnancy. Forever grateful!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
