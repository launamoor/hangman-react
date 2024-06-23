import React from "react";
import styles from "./styles/KeyboardLetter.module.css";

const KeyboardLetter = ({ children, onLetterClick, disabled }) => {
  return (
    <button
      disabled={disabled ? true : false}
      onClick={onLetterClick}
      className={styles.letterContainerShown}
    >
      <div className={styles.letter}>{children}</div>
    </button>
  );
};

export default KeyboardLetter;
