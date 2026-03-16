import React, { useState } from 'react';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "Why do families choose Femmenest over bigger hospitals?",
            answer: "Because bigger isn't always better. Here, you're not a token number. You get one dedicated doctor, luxury suites that feel like home, a Level-III NICU, and care that's personal — not corporate."
        },
        {
            question: "I'm scared of delivery pain. Can you help?",
            answer: "Absolutely! We're painless delivery experts. Our epidural-assisted births let you stay awake, alert, and comfortable. Most moms tell us they wish they'd known sooner — it changes everything."
        },
        {
            question: "We've been trying for a baby. Is there hope?",
            answer: "More than hope — we've helped thousands of couples become parents. Our IVF success rates are among Delhi's highest. Every family's story is different, and we'd love to understand yours."
        },
        {
            question: "What's included in your maternity care?",
            answer: "Everything. Antenatal visits, all tests, delivery, NICU if needed, lactation help, nutrition guidance, and postpartum support. No hidden costs, no surprises — just complete care."
        },
        {
            question: "How quickly can I get an appointment?",
            answer: "Usually within 24-48 hours. Call us at 092180 72466 or WhatsApp — we respond within 30 minutes during working hours. Urgent? We'll find a way."
        }
    ];

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <div className="faq-header-left">
                        <span className="section-tag">Got Questions?</span>
                        <h2 className="section-title">We've Got <span className="accent">Answers</span></h2>
                    </div>
                    <a href="/#appointment" className="btn-gradient">Still Curious? Ask Us <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="faq-wrapper">
                    <div className="faq-image">
                        <div className="faq-image-placeholder">
                            <i className="fas fa-user-doctor"></i>
                            <span>Consultation</span>
                        </div>
                        <div className="faq-badge"><i className="fas fa-arrow-up-right"></i></div>
                        <div className="faq-questions-badge">
                            <i className="fas fa-question"></i>
                            <span>No Question<br/>Is Too Small</span>
                        </div>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <h4>{faq.question}</h4>
                                    <span>+</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
