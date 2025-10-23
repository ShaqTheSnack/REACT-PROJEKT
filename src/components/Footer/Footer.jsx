import React from "react";
import "./Footer.css";

const Footer = ({ age = 18 }) => {
    return (
        <footer className="footer">
            <p className="footer-text">Gambling Age: {age}</p>
        </footer>
    );
};

export default Footer;
