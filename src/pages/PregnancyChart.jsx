import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PregnancyChart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1><span className="accent">Pregnancy</span> Chart</h1>
                    <div className="breadcrumb">
                        <Link to="/" className="nav-link">Home</Link>
                        <i className="fas fa-chevron-right"></i>
                        <span>Pregnancy Chart</span>
                    </div>
                </div>
            </section>
            
            <section className="coming-soon">
                <div className="container">
                    <div className="coming-soon-icon"><i className="fas fa-baby"></i></div>
                    <h2>Coming Soon!</h2>
                    <p>Our comprehensive week-by-week pregnancy chart is being prepared. Track your baby's growth and know what to expect at each stage.</p>
                    <a href="/#appointment" className="btn-gradient nav-link">
                        <i className="fas fa-calendar-check"></i> Book a Consultation
                    </a>
                </div>
            </section>
        </>
    );
}

export default PregnancyChart;
