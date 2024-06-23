import WelcomeScreen from "./components/WelcomeScreen";
import Background from "./components/Background";
import HowToPlay from "./components/HowToPlay";
import PickCategory from "./components/PickCategory";
import Board from "./components/Board";
import { useState } from "react";
import data from "./data.json";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [category, setCategory] = useState("");
  const [goodGuess, setGoodGuess] = useState(false);
  const [wordToGuess, setWordToGuess] = useState("");
  const [letterClicked, setLetterClicked] = useState("");
  const [valuesClicked, setValuesClicked] = useState([]);
  const [paused, setPaused] = useState(false);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const randomNumber = Math.floor(Math.random() * 30) - 1;

  const handleHowToPlay = () => {
    setCurrentScreen("howToPlay");
  };
  const handlePlay = () => {
    setCurrentScreen("pickCategory");
    setPaused(false);
    setWon(false);
    setLost(false);
    setCategory("");
    setValuesClicked([]);
    setLetterClicked("");
    setWordToGuess("");
    setGoodGuess(false);
  };
  const handleBackToWelcome = () => {
    setCurrentScreen("welcome");
    setPaused(false);
    setWon(false);
    setLost(false);
    setCategory("");
    setValuesClicked([]);
    setLetterClicked("");
    setWordToGuess("");
    setGoodGuess(false);
  };
  const handlePickCategory = (e) => {
    e.preventDefault();
    const pickedCategory = e.target.querySelector("h3").innerHTML;
    setCategory(pickedCategory);
    setWordToGuess(
      data?.categories[pickedCategory][randomNumber].name.toLowerCase()
    );
    setCurrentScreen("board");
  };
  const onPause = () => {
    setPaused(true);
  };
  const onContinue = () => {
    setPaused(false);
  };

  const onLetterClick = (e) => {
    const currentLetter = e.currentTarget.querySelector("div").innerHTML;
    setLetterClicked(currentLetter);
    setValuesClicked((prev) =>
      prev ? [...prev, currentLetter] : [currentLetter]
    );
    console.log(valuesClicked);
  };

  const displayScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onPlay={handlePlay} onClick={handleHowToPlay} />;
      case "howToPlay":
        return <HowToPlay onClick={handleBackToWelcome} />;
      case "pickCategory":
        return (
          <PickCategory
            onCategoryPick={handlePickCategory}
            onClick={handleBackToWelcome}
          />
        );
      case "board":
        return (
          <Board
            won={won}
            lost={lost}
            setWon={setWon}
            setLost={setLost}
            handleBackToWelcome={handleBackToWelcome}
            onPlay={handlePlay}
            onContinue={onContinue}
            paused={paused}
            onPause={onPause}
            valuesClicked={valuesClicked}
            setGoodGuess={setGoodGuess}
            letterClicked={letterClicked}
            onLetterClick={onLetterClick}
            guess={goodGuess}
            categoryTitle={category}
            wordToGuess={wordToGuess}
          />
        );
      default:
        return <WelcomeScreen onClick={handleHowToPlay} />;
    }
  };
  return <Background>{displayScreen()}</Background>;
}

export default App;
