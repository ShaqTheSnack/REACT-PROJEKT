import React from "react";

const Footer = ({ age = 18 }) => {
    return (
        <footer>
            <p>Gambling Age: {age}</p>
        </footer>
    );
};

export default Footer;
