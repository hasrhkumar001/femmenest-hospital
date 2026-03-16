import React from 'react';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-offer">
                        <i className="fas fa-sparkles"></i><span>Delhi's Most Loved Maternity Hospital</span>
                    </div>
                    <h1 className="hero-title">Where Your <span className="highlight">Miracle</span> Begins</h1>
                    <p className="hero-tagline">Every heartbeat tells a story. Let us be part of yours.</p>
                    <p className="hero-subtitle">Why Families Choose Femmenest</p>
                    <div className="hero-benefits">
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>Painless Delivery Experts</span></div>
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>World-Class NICU</span></div>
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>One Doctor, One Journey</span></div>
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>Spa-Like Recovery Suites</span></div>
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>IVF Success Stories</span></div>
                        <div className="hero-benefit"><i className="fas fa-check"></i><span>Zero Compromise Care</span></div>
                    </div>
                    <div className="hero-actions">
                        <a href="/#appointment" className="btn-gradient"><span>Start Your Journey</span><i className="fas fa-arrow-right"></i></a>
                        <a href="tel:09218072466" className="btn-outline"><i className="fas fa-phone"></i><span>Talk to Us</span></a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <div className="hero-image">
                            <img src="/hero-couple.webp" alt="Happy Indian pregnant couple - Femmenest Hospital" className="hero-img" />
                        </div>
                        <div className="hero-float hero-float-1">
                            <div className="hero-float-icon gold"><i className="fas fa-star"></i></div>
                            <div className="hero-float-text"><h4>5.0 Rating</h4><span>Google Reviews</span></div>
                        </div>
                        <div className="hero-float hero-float-2">
                            <div className="hero-float-icon green"><i className="fas fa-heart"></i></div>
                            <div className="hero-float-text"><h4>10,000+</h4><span>Happy Births</span></div>
                        </div>
                        <div className="hero-float hero-float-3">
                            <div className="hero-float-icon pink"><i className="fas fa-clock"></i></div>
                            <div className="hero-float-text"><h4>24/7 Care</h4><span>Always Here</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
