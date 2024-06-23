import React from "react";
import styles from "./styles/DisplayedLetter.module.css";

const DisplayedLetter = ({ children, guessed }) => {
  return (
    <div
      className={
        guessed ? styles.letterContainerShown : styles.letterContainerHidden
      }
    >
      <div className={guessed ? styles.letter : styles.letterHidden}>
        {children}
      </div>
    </div>
  );
};

export default DisplayedLetter;
