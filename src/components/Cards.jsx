import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "../styles/Cards.css";

function Cards() {
  const [cardQty, setCardQty] = useState(10);
  const [gameBoard, setGameBoard] = useState(null);

  //  Fisher-Yates Shuffle Algorithm
  const shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  };

  useEffect(() => {
    console.log("testing");
    let newGame = [];
    let count = 0;
    for (let i = 0; i <= cardQty; i++) {
      newGame.push(count);
      newGame.push(count);

      count += 1;
    }
    shuffle(newGame);

    setGameBoard(newGame);
  }, [cardQty]);
  if (!gameBoard) return <h1>Loading game...</h1>;
  console.log(gameBoard);
  return (
    <div className="gameboard">
      {gameBoard.map((card) => {
        return <SingleCard card={card} />;
      })}
    </div>
  );
}

export default Cards;
