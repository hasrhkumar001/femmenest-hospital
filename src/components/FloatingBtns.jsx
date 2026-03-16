import React from 'react';

function FloatingBtns() {
    return (
        <div className="floating-btns">
            <a href="https://api.whatsapp.com/send?phone=9218072466&text=Hello" target="_blank" rel="noreferrer" className="float-btn whatsapp">
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="tel:09218072466" className="float-btn call">
                <i className="fas fa-phone"></i>
            </a>
            <a href="/#appointment" className="float-btn enquiry nav-link">
                <i className="fas fa-envelope"></i>
            </a>
        </div>
    );
}

export default FloatingBtns;
