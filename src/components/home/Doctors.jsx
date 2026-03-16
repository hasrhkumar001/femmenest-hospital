import React, { useState, useEffect } from 'react';

const doctorsList = [
    { name: "Dr. Sowjanya Aggarwal", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Anita Aggarwal", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Anita Jain", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Apoorva Reddy", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Dipti Nabh", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Pooja Prasad", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Ragini Gupta", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Rakhi Rawat", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Reena Mehra", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Rekha Sarin", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Rupali Gupta", role: "Obstetrician & Gynaecologist" },
    { name: "Dr. Sangeeta Goel", role: "Obstetrician & Gynaecologist" }
];

function Doctors() {
    const [position, setPosition] = useState(0);

    const slideRight = () => {
        setPosition(prev => (prev + 1) % 12);
    };

    const slideLeft = () => {
        setPosition(prev => (prev - 1 + 12) % 12);
    };

    useEffect(() => {
        const interval = setInterval(slideRight, 3000);
        return () => clearInterval(interval);
    }, []);

    const dotIndex = Math.floor(position / 4) % 3;
    const cardWidth = 305;

    return (
        <section className="doctors-section" id="doctors">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">The Hands That Care</span>
                    <h2 className="section-title">Doctors Who <span className="accent">Actually Listen</span></h2>
                    <p className="section-subtitle">No rushing, no jargon. Just warm conversations with specialists who remember your last visit.</p>
                </div>
                <div className="doctors-slider-container">
                    <button className="doctors-nav-btn prev" onClick={slideLeft}><i className="fas fa-chevron-left"></i></button>
                    <div className="doctors-slider">
                        <div className="doctors-track" style={{ 
                            transform: `translateX(-${position * cardWidth}px)`, 
                            transition: 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)' 
                        }}>
                            {[...doctorsList, ...doctorsList.slice(0, 4)].map((doc, i) => (
                                <div className="doctor-card" key={i}>
                                    <div className="doctor-image"><i className="fas fa-user-doctor"></i></div>
                                    <div className="doctor-info">
                                        <h4>{doc.name}</h4>
                                        <span>{doc.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="doctors-nav-btn next" onClick={slideRight}><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="doctors-dots">
                    {[0, 1, 2].map(i => (
                        <button 
                            key={i} 
                            className={`doctors-dot ${dotIndex === i ? 'active' : ''}`} 
                            onClick={() => setPosition(i * 4)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Doctors;
