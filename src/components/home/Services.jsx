import React from 'react';

function Services() {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What We Do Best</span>
                    <h2 className="section-title">Care That Feels Like <span className="accent">Family</span></h2>
                    <p className="section-subtitle">From your first scan to your baby's first cry — we're with you at every heartbeat.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-baby-carriage"></i></div>
                        <h3>Maternity Care</h3>
                        <p>Your pregnancy, your way. Painless deliveries, luxury suites, and a team that treats you like royalty — because you deserve it.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-venus"></i></div>
                        <h3>Gynaecology</h3>
                        <p>No awkward moments, no judgement. Just honest conversations and expert care for PCOS, hormones, and everything in between.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-heart-pulse"></i></div>
                        <h3>Infertility & IVF</h3>
                        <p>Dreams don't have deadlines. Our fertility specialists have helped thousands of couples hear "You're pregnant!" Let's write your story.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon"><i className="fas fa-hospital"></i></div>
                        <h3>NICU Care</h3>
                        <p>Tiny fighters deserve the best. Our Level-III NICU with 24/7 neonatologists ensures your little one gets the strongest start.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
