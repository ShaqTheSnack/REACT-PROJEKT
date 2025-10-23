import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const ProductCard = ({ title, image, price, description, buttonText, onButtonClick, linkTo }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-price">{price}</p>
            <p className="card-description">{description}</p>
            {linkTo ? (
                <Link className="card-button" to={linkTo}>{buttonText}</Link>
            ) : (
                <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
            )}
        </div>
    );
};

export default ProductCard;
