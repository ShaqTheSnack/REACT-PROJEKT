import React from "react";
import "./InfoCard.css";

const InfoCard = ({ cardTitle, hobbyOne, hobbyTwo, hobbyThree, imageSrc }) => {
    return (
        <section className="info-card">
            <h2 className="card-title">{cardTitle}</h2>
            <ul className="hobby-list">
                <li>{hobbyOne}</li>
                <li>{hobbyTwo}</li>
                <li>{hobbyThree}</li>
            </ul>
            <img src={imageSrc} alt="InfoCard" className="hobby-image" />
        </section>
    );
};

export default InfoCard;
