import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const linkStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  color: "#fff",
  padding: "0.5rem 0.75rem",
  borderRadius: "6px",
};

const activeStyle = {
  background: "#1f2937",
};

const navBarStyle = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  padding: "0.75rem 1rem",
  background: "#111827",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const Navigation = () => {
  return (
    <nav style={navBarStyle}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navigation;
