import React from "react";
import styles from "./styles/WelcomeScreen.module.css";
import play from "../assets/images/icon-play.svg";
import logo from "../assets/images/logo.svg";

const WelcomeScreen = ({ onClick, onPlay }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.startWrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="The Hangman Game Logo" />
        </div>
        <div></div>
        <button onClick={onPlay} className={styles.playButton}>
          <img className={styles.logoIcon} src={play} alt="Play button" />
        </button>
        <button onClick={onClick} className={styles.howToPlayButton}>
          How to play
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
