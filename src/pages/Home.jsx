import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CareApproach from '../components/home/CareApproach';
import Doctors from '../components/home/Doctors';
import Testimonials from '../components/home/Testimonials';
import AppointmentForm from '../components/home/AppointmentForm';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

function Home() {
    useEffect(() => {
        // Scroll to hash if present directly after render
        const hash = window.location.hash;
        if (hash) {
            const elm = document.getElementById(hash.substring(1));
            if (elm) {
                elm.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <SEO 
                title="FemmeNest Hospital | Best Maternity & Gynaecology in Delhi"
                description="Experience world-class maternity, gynaecology, and NICU care at FemmeNest Hospital in Karkardooma, Delhi. Book your appointment today."
            />
            <Hero />
            <Services />
            <CareApproach />
            <Doctors />
            <Testimonials />
            <AppointmentForm />
            <FAQ />
            <CTASection />
        </>
    );
}

export default Home;
