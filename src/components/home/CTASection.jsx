import React from 'react';

function CTASection() {
    return (
        <section className="cta-section" id="contact">
            <div className="cta-content">
                <h2 className="cta-title">Ready to Meet Your Little One?</h2>
                <p className="cta-text">The best time to start was yesterday. The next best time is now. Let's make your dream a reality.</p>
                <div className="cta-buttons">
                    <a href="/#appointment" className="cta-btn-white">
                        <i className="fas fa-calendar-check"></i>
                        <span>Book Free Consultation</span>
                    </a>
                    <a href="tel:09218072466" className="cta-btn-outline">
                        <i className="fas fa-phone"></i>
                        <span>092180 72466</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
