import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='full-footer no-print' >
            <h4 className='footer-content'>All Right Reserved by &copy; Mishk@t - {new Date().getFullYear()}</h4>
        </div>
    );
};

export default Footer;