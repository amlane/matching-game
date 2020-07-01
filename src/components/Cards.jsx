import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import GameWon from "./GameWon";
import "../styles/Cards.css";
import { shuffle } from "../utils/FisherYatesShuffle";

function Cards({ level, setLevel }) {
  const [cardQty, setCardQty] = useState(12);
  const [gameBoard, setGameBoard] = useState(null);
  const [isFlipped, setIsFlipped] = useState([]);
  const [selectionCount, setSelectionCount] = useState(0);
  const [firstSelection, setFirstSelection] = useState(null);
  const [indexOfFirstSelection, setIndexOfFirstSelection] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);
  const [usersScore, setUsersScore] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    console.log("setLevel");
    // checks for last level user was on
    let currentLevel = localStorage.getItem("current_level");
    if (currentLevel) {
      setCardQty(12 + 4 * (currentLevel - 1));
      setLevel(currentLevel);
    }
    // instructions for new users
    if (currentLevel === null) {
      setDisplayMessage("Select 2 tiles");
    }

    let newGame = [];
    let count = 0;
    for (let i = 1; i <= cardQty / 2; i++) {
      newGame.push(count);
      newGame.push(count);

      count += 1;
    }
    shuffle(newGame);

    setGameBoard(newGame);
  }, [cardQty, setLevel]);

  useEffect(() => {
    let initializeBoard = [];
    for (let i = 0; i < cardQty; i++) {
      initializeBoard.push(0);
    }

    setIsFlipped(initializeBoard);
  }, [cardQty]);

  const resetFlips = (arr) => {
    setIsFlipped(arr);
  };

  const resetBoard = () => {
    let newArray = [];

    for (let i = 0; i < isFlipped.length; i++) {
      if (isFlipped[i] === 2) {
        newArray.push(2);
      } else {
        newArray.push(0);
      }
    }
    resetFlips(newArray);

    // reset selection count
    setSelectionCount(0);
  };

  const markWinningCards = (index) => {
    let newArray = [];
    for (let i = 0; i < isFlipped.length; i++) {
      if (i === index || i === indexOfFirstSelection || isFlipped[i] === 2) {
        newArray.push(2);
      } else {
        newArray.push(0);
      }
    }
    resetFlips(newArray);

    setSelectionCount(0);
  };

  if (!gameBoard) return <h1 style={{ color: "white" }}>Loading game...</h1>;

  return isGameWon ? (
    <GameWon
      guessCount={guessCount}
      setIsGameWon={setIsGameWon}
      cardQty={cardQty}
      setCardQty={setCardQty}
      setUsersScore={setUsersScore}
      setGuessCount={setGuessCount}
      level={level}
      setLevel={setLevel}
    />
  ) : (
    <div className="container">
      <div className="gameboard">
        {gameBoard.map((card, i) => {
          return (
            <SingleCard
              card={card}
              key={i}
              index={i}
              cardQty={cardQty}
              selectionCount={selectionCount}
              setSelectionCount={setSelectionCount}
              firstSelection={firstSelection}
              setFirstSelection={setFirstSelection}
              setDisplayMessage={setDisplayMessage}
              isFlipped={isFlipped}
              resetFlips={resetFlips}
              isPlayDisabled={isPlayDisabled}
              setIsPlayDisabled={setIsPlayDisabled}
              indexOfFirstSelection={indexOfFirstSelection}
              setIndexOfFirstSelection={setIndexOfFirstSelection}
              usersScore={usersScore}
              setUsersScore={setUsersScore}
              guessCount={guessCount}
              setGuessCount={setGuessCount}
              setIsGameWon={setIsGameWon}
              level={level}
              resetBoard={resetBoard}
              markWinningCards={markWinningCards}
            />
          );
        })}
      </div>
      <div className="display-msg">{displayMessage}</div>
      <div className="scoreboard">
        <span>
          Matches: <strong> {usersScore}</strong>
        </span>
        <span>
          Guesses: <strong> {guessCount}</strong>
        </span>
      </div>
    </div>
  );
}

export default Cards;
