import React, { useState } from "react";
import styles from "./styles/Board.module.css";
import iconHeart from "../assets/images/icon-heart.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import DisplayedWordGrid from "./DisplayedWordGrid";
import Keyboard from "./Keyboard";
import Menu from "./Menu";

const Board = ({
  categoryTitle,
  guess,
  wordToGuess,
  onLetterClick,
  letterClicked,
  setGoodGuess,
  valuesClicked,
  onPause,
  paused,
  onContinue,
  onPlay,
  handleBackToWelcome,
  setWon,
  setLost,
  won,
  lost,
}) => {
  const [healthStatus, setHealthStatus] = useState(100);
  return (
    <main className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.topFlex}>
          <div className={styles.menuFlex}>
            <button onClick={onPause} className={styles.menuButton}>
              <img
                className={styles.menuButtonIcon}
                src={iconMenu}
                alt="Menu"
              />
            </button>
            <h1 className={styles.categoryTitle}>{categoryTitle}</h1>
          </div>
          <div className={styles.healthBarFlex}>
            <div className={styles.healthBarOuter}>
              <div
                style={{ width: `${healthStatus}%` }}
                className={styles.healthBarInner}
              ></div>
            </div>
            <div>
              <img
                className={styles.heartIcon}
                src={iconHeart}
                alt="Icon Heart"
              />
            </div>
          </div>
        </div>
        <DisplayedWordGrid
          setWon={setWon}
          setLost={setLost}
          setGoodGuess={setGoodGuess}
          healthStatus={healthStatus}
          setHealthStatus={setHealthStatus}
          letterClicked={letterClicked}
          guess={guess}
          wordToGuess={wordToGuess}
        />
        <Keyboard
          valuesClicked={valuesClicked}
          letterClicked={letterClicked}
          onLetterClick={onLetterClick}
        />
      </div>
      {paused && (
        <Menu
          paused={paused}
          won={won}
          lost={lost}
          handleBackToWelcome={handleBackToWelcome}
          onPlay={onPlay}
          onContinue={onContinue}
          title={"Paused"}
        />
      )}
      {won && (
        <Menu
          paused={paused}
          won={won}
          lost={lost}
          handleBackToWelcome={handleBackToWelcome}
          onPlay={onPlay}
          onContinue={onContinue}
          title={"You Win"}
        />
      )}
      {lost && (
        <Menu
          paused={paused}
          won={won}
          lost={lost}
          handleBackToWelcome={handleBackToWelcome}
          onPlay={onPlay}
          onContinue={onContinue}
          title={"You Lose"}
        />
      )}
    </main>
  );
};

export default Board;
