import React from "react";
import "./Card.css";

const Card = ({ title, image, price, description, buttonText, onButtonClick }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-price">{price}</p>
            <p className="card-description">{description}</p>
            <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
        </div>
    );
};

export default Card;
