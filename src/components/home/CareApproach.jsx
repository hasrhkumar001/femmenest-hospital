import React, { useState } from 'react';

function CareApproach() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="care-section" id="care">
            <div className="container">
                <div className="care-wrapper">
                    <div className="care-image">
                        <div className="care-image-placeholder">
                            <i className="fas fa-stethoscope"></i>
                            <span>Doctor with Patient</span>
                        </div>
                    </div>
                    <div className="care-content">
                        <span className="section-tag"><i className="fas fa-heart"></i> The Femmenest Way</span>
                        <h2 className="section-title">Not Just Healthcare. <span className="accent">Heart-care.</span></h2>
                        <p className="care-text">We don't believe in assembly-line medicine. Here, you're not a file number — you're family. One doctor guides your entire journey, knowing your fears, your hopes, and your baby's every kick.</p>
                        <div className="care-accordion">
                            <div className={`care-item ${activeIndex === 0 ? 'active' : ''}`}>
                                <div className="care-item-header" onClick={() => toggleAccordion(0)}>
                                    <h4>Your Doctor Knows Your Name</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="care-item-content">
                                    <p>No rotating doctors, no repeating your story. One specialist stays with you from the first test to the first cry — building trust that makes all the difference.</p>
                                </div>
                            </div>
                            <div className={`care-item ${activeIndex === 1 ? 'active' : ''}`}>
                                <div className="care-item-header" onClick={() => toggleAccordion(1)}>
                                    <h4>Answers, Not Anxiety</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="care-item-content">
                                    <p>3 AM panic? We get it. Our doctors actually pick up the phone. No question is silly, no concern too small. Your peace of mind is our priority.</p>
                                </div>
                            </div>
                            <div className={`care-item ${activeIndex === 2 ? 'active' : ''}`}>
                                <div className="care-item-header" onClick={() => toggleAccordion(2)}>
                                    <h4>Beyond the Delivery Room</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="care-item-content">
                                    <p>Lactation struggles? Postpartum blues? We don't disappear after discharge. Our support continues because motherhood doesn't come with a manual.</p>
                                </div>
                            </div>
                        </div>
                        <a href="/#appointment" className="btn-gradient" style={{ marginTop: '30px' }}><span>Let's Talk</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareApproach;
