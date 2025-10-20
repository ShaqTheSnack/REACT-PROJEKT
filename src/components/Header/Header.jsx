import React from "react";
import "./Header.css";

const Header = ({ name }) => {
    return (
        <header>
            <h1>Welcome Back! {name}</h1>
        </header>
    );
};

export default Header;
