import React from "react";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Footer from "./components/Footer/Footer";
import "./index.css";
import diceImg from "./assets/Images/Dice.png";

function App() {
    return (
        <>
            <Header name="SHILO JR THE 3RD" />
            <InfoCard
                cardTitle="Gambling Games"
                hobbyOne="Blackjack"
                hobbyTwo="Poker"
                hobbyThree="Roulette"
                imageSrc={diceImg}
            />
            <Footer age={21} />
        </>
    );
}

export default App;

