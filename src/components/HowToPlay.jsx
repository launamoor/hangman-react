import React from "react";
import styles from "./styles/HowToPlay.module.css";
import backIcon from "../assets/images/icon-back.svg";
import FlexCard from "./FlexCard";

const HowToPlay = ({ onClick }) => {
  const cards = [
    {
      number: "01",
      title: "Choose a category",
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      number: "02",
      title: "Guess letters",
      description:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      number: "03",
      title: "Win or lose",
      description:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.topFlex}>
          <button onClick={onClick} className={styles.backButton}>
            <img src={backIcon} alt="Back Icon" />
          </button>
          <h1 className={styles.topFlexTitle}>How to Play</h1>
          <div style={{ height: "9.4rem", width: "9.4rem" }}></div>
        </div>
        <div className={styles.bottomFlex}>
          {cards.map((card, i) => (
            <FlexCard
              key={i}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
