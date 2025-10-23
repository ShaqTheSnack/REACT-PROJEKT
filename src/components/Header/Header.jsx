
import React from "react";
import "./Header.css";

const Header = ({ name }) => {
    return (
        <header className="header">
            <h1 className="header-title">Welcome Back! {name}</h1>
        </header>
    );
};

export default Header;
    