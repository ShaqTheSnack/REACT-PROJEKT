
import React from "react";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Footer from "./components/Footer/Footer";
import GridContainer from "./components/GridContainer/GridContainer";
import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import "./index.css";
import diceImg from "./assets/Images/Dice.png";


function App() {
    const cards = [
        { title: "Red Chip", image: diceImg, price: "$5", description: "Standard rød chip til bordspil.", buttonText: "Køb chip" },
        { title: "Blue Chip", image: diceImg, price: "$10", description: "Blå chip til poker og blackjack.", buttonText: "Køb chip" },
        { title: "Green Chip", image: diceImg, price: "$25", description: "Grøn chip til roulette og craps.", buttonText: "Køb chip" },
        { title: "Black Chip", image: diceImg, price: "$100", description: "Sort chip til high roller games.", buttonText: "Køb chip" },
        { title: "Purple Chip", image: diceImg, price: "$500", description: "Lilla chip til VIP-borde.", buttonText: "Køb chip" },
        { title: "Orange Chip", image: diceImg, price: "$1,000", description: "Orange chip til store indsatser.", buttonText: "Køb chip" },
        { title: "Grey Chip", image: diceImg, price: "$5,000", description: "Grå chip til eksklusive spil.", buttonText: "Køb chip" },
        { title: "Yellow Chip", image: diceImg, price: "$10,000", description: "Gul chip til turneringer.", buttonText: "Køb chip" },
        { title: "White Chip", image: diceImg, price: "$25,000", description: "Hvid chip til de største gevinster.", buttonText: "Køb chip" }
    ];
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
            <Counter />
            <GridContainer>
                {cards.map((card, idx) => (
                    <Card key={idx} {...card} />
                ))}
            </GridContainer>
        </>
    );
}

export default App;

