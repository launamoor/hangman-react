import React, { useEffect, useState } from "react";
import styles from "./styles/DisplayedWordGrid.module.css";
import DisplayedLetter from "./DisplayedLetter";
import SpaceLetter from "./SpaceLetter";

const DisplayedWordGrid = ({
  wordToGuess,
  letterClicked,
  setHealthStatus,
  healthStatus,
  setWon,
  setLost,
}) => {
  const [wordToDisplay, setWordToDisplay] = useState([]);

  useEffect(() => {
    const words = wordToGuess.split(" ");
    const wordsArray = words.map((word) => new Array(word.length).fill(""));
    setWordToDisplay(wordsArray);

    console.log(wordToGuess);
  }, [wordToGuess]);

  const displayWordToDisplay = () => {
    return wordToDisplay.map((word, index) => (
      <div key={index} className={styles.wordFlex}>
        {word.map((letter, letterIndex) => {
          if (letter) {
            return (
              <DisplayedLetter
                guessed={true}
                key={letter + index + letterIndex}
              >
                {letter}
              </DisplayedLetter>
            );
          } else {
            return (
              <DisplayedLetter
                guessed={false}
                className={styles.letterContainerHidden}
                key={letter + index + letterIndex}
              >
                {letter}
              </DisplayedLetter>
            );
          }
        })}
        <SpaceLetter />
      </div>
    ));
  };

  // useEffect(() => {
  //   const updateWord = () => {
  //     if (letterClicked) {
  //       // Create new array
  //       const newWordToDisplay = wordToDisplay.map((wordArray) => [
  //         ...wordArray,
  //       ]);

  //       // Check if phrase contains just one word
  //       if (wordToGuess.split(" ").length === 1) {
  //         // Check if clicked letter is in the word
  //         if (wordToGuess.includes(letterClicked)) {
  //           const indexes = [];
  //           // Get indexes
  //           for (let i = 0; i < wordToGuess.length; i++) {
  //             if (wordToGuess[i] === letterClicked) indexes.push(i);
  //           }
  //           // Set new word to be displayed
  //           indexes.forEach((index) => {
  //             newWordToDisplay[0][index] = letterClicked;
  //           });
  //         } else {
  //           setHealthStatus((prev) => (prev -= 12.5));
  //         }
  //       } else {
  //         // If there's more than one word loop through all of them
  //         wordToGuess.split(" ").forEach((word, wordIndex) => {
  //           if (word.includes(letterClicked)) {
  //             const indexes = [];
  //             for (let i = 0; i < word.length; i++) {
  //               if (word[i] === letterClicked) indexes.push(i);
  //             }
  //             indexes.forEach((index) => {
  //               newWordToDisplay[wordIndex][index] = letterClicked;
  //             });
  //           } else {
  //             setHealthStatus(
  //               (prev) => (prev -= 12.5 / wordToGuess.split(" ").length)
  //             );
  //           }
  //         });
  //       }

  //       // Update state
  //       setWordToDisplay(newWordToDisplay);
  //     }
  //   };

  //   updateWord();
  //   // eslint-disable-next-line
  // }, [letterClicked]);

  useEffect(() => {
    const updateWord = () => {
      if (letterClicked) {
        // Create new array
        const newWordToDisplay = wordToDisplay.map((wordArray) => [
          ...wordArray,
        ]);
        let letterFound = false;

        wordToGuess.split(" ").forEach((word, wordIndex) => {
          if (word.includes(letterClicked)) {
            letterFound = true;
            const indexes = [];
            for (let i = 0; i < word.length; i++) {
              if (word[i] === letterClicked) indexes.push(i);
            }
            indexes.forEach((index) => {
              newWordToDisplay[wordIndex][index] = letterClicked;
            });
          }
        });

        if (!letterFound) {
          setHealthStatus((prev) => prev - 12.5);
        }

        // Update state
        setWordToDisplay(newWordToDisplay);
      }
    };

    updateWord();
    // eslint-disable-next-line
  }, [letterClicked]);

  useEffect(() => {
    // Check for win or lose
    const flattenedWordToDisplay = wordToDisplay.flat().join("");
    const flattenedWordToGuess = wordToGuess.split(" ").join("");

    if (flattenedWordToDisplay === flattenedWordToGuess) {
      setWon(true);
    } else if (healthStatus < 5) {
      setLost(true);
    }
    // eslint-disable-next-line
  }, [healthStatus, wordToDisplay]);

  return <div className={styles.container}>{displayWordToDisplay()}</div>;
};

export default DisplayedWordGrid;
