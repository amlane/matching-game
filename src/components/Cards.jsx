import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";
import { shuffle } from "../utils/FisherYatesShuffle";

function Cards() {
  const [cardQty, setCardQty] = useState(20);
  const [gameBoard, setGameBoard] = useState(null);
  const [isFlipped, setIsFlipped] = useState([]);
  const [selectionCount, setSelectionCount] = useState(0);
  const [firstSelection, setFirstSelection] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(null);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);

  // TO DO - handle user score and winning matches

  useEffect(() => {
    // console.log("testing");
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
    console.log("blahhh");
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
  //   console.log(gameBoard);
  return (
    <>
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
            />
          );
        })}
      </div>
      <p style={{ color: "white" }}>{displayMessage}</p>
    </>
  );
}

export default Cards;
