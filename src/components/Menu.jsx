import React from "react";
import styles from "./styles/Menu.module.css";

const Menu = ({
  title,
  onContinue,
  onPlay,
  handleBackToWelcome,
  paused,
  won,
  lost,
}) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.menuBox}>
          <h3 className={styles.menuBoxTitle}>{title}</h3>

          {paused && (
            <button onClick={onContinue} className={styles.buttonContinue}>
              Continue
            </button>
          )}
          {won && (
            <button onClick={onPlay} className={styles.buttonContinue}>
              Play Again!
            </button>
          )}
          {lost && (
            <button onClick={onPlay} className={styles.buttonContinue}>
              Play Again!
            </button>
          )}
          <button onClick={onPlay} className={styles.buttonCategory}>
            New Category
          </button>
          <button onClick={handleBackToWelcome} className={styles.buttonQuit}>
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
