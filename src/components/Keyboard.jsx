import React, { useEffect } from "react";
import styles from "./styles/Keyboard.module.css";
import KeyboardLetter from "./KeyboardLetter";

const Keyboard = ({ onLetterClick, letterClicked, valuesClicked }) => {
  useEffect(() => {
    //
  }, [letterClicked, valuesClicked]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const displayKeyboard = () => {
    return alphabet.map((letter, i) => {
      if (valuesClicked.includes(letter)) {
        return (
          <KeyboardLetter disabled onLetterClick={onLetterClick} key={i}>
            {letter}
          </KeyboardLetter>
        );
      }
      return (
        <KeyboardLetter onLetterClick={onLetterClick} key={i}>
          {letter}
        </KeyboardLetter>
      );
    });
  };

  return (
    <div className={styles.keyboardGrid}>
      {/* {alphabet.map((letter, i) => (
        <KeyboardLetter onLetterClick={onLetterClick} key={i}>
          {letter}
        </KeyboardLetter>
      ))} */}
      {displayKeyboard()}
    </div>
  );
};

export default Keyboard;
