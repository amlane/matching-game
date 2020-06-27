import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";
import { shuffle } from "../utils/FisherYatesShuffle";

function Cards() {
  const [cardQty] = useState(20);
  const [gameBoard, setGameBoard] = useState(null);
  const [isFlipped, setIsFlipped] = useState([]);
  const [selectionCount, setSelectionCount] = useState(0);
  const [firstSelection, setFirstSelection] = useState(null);
  const [indexOfFirstSelection, setIndexOfFirstSelection] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);
  const [usersScore, setUsersScore] = useState(0);
  const [guessCount, setGuessCount] = useState(0);

  // TO DO - handle different difficulty levels and board sizes

  useEffect(() => {
    let newGame = [];
    let count = 0;
    for (let i = 1; i <= cardQty / 2; i++) {
      newGame.push(count);
      newGame.push(count);

      count += 1;
    }
    shuffle(newGame);

    setGameBoard(newGame);
  }, [cardQty]);

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

  if (!gameBoard) return <h1>Loading game...</h1>;

  return (
    <div className="container">
      <div className="scoreboard">
        <span>Score: {usersScore}</span>
        <span>Guesses: {guessCount}</span>
      </div>
      <div className="gameboard">
        {gameBoard.map((card, i) => {
          return (
            <SingleCard
              card={card}
              key={i}
              index={i}
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
            />
          );
        })}
      </div>
      <div className="display-msg">{displayMessage}</div>
    </div>
  );
}

export default Cards;
