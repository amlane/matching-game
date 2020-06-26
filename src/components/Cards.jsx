import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";
import { shuffle } from "../utils/FisherYatesShuffle";

function Cards() {
  const [cardQty, setCardQty] = useState(10);
  const [gameBoard, setGameBoard] = useState(null);

  useEffect(() => {
    // console.log("testing");
    let newGame = [];
    let count = 0;
    for (let i = 1; i <= cardQty; i++) {
      newGame.push(count);
      newGame.push(count);

      count += 1;
    }
    shuffle(newGame);

    setGameBoard(newGame);
  }, [cardQty]);

  if (!gameBoard) return <h1>Loading game...</h1>;
  //   console.log(gameBoard);
  return (
    <div className="gameboard">
      {gameBoard.map((card, i) => {
        return <SingleCard card={card} key={i} />;
      })}
    </div>
  );
}

export default Cards;
