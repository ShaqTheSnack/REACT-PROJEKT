import React from "react";
import "./InfoCard.css";
import images from "../../assets/Images/dice.png";


const InfoCard = () => {
    return (
        <section className="info-card">
            <h2 className="card-title">Mine hobbyer</h2>
            <ul class="hobby-list">
                <li>Programmering</li>
                <li>Bord fodbold</li>
                <li>Træning</li>
                <img src={images} alt="Dice Image" className="hobby-image" />
            </ul>
        </section>
    );
};

export default InfoCard;
