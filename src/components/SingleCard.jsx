import React, { useState } from "react";
import "../styles/Cards.css";
import {
  FiHeart,
  FiHeadphones,
  FiMoon,
  FiSend,
  FiScissors,
  FiMusic,
  FiSun,
  FiLock,
  FiGithub,
  FiAnchor,
} from "react-icons/fi";

function SingleCard({
  card,
  index,
  selectionCount,
  setSelectionCount,
  firstSelection,
  setFirstSelection,
  setDisplayMessage,
  isFlipped,
  resetFlips,
  setIsPlayDisabled,
  isPlayDisabled,
  indexOfFirstSelection,
  setIndexOfFirstSelection,
  setUsersScore,
  usersScore,
  guessCount,
  setGuessCount,
}) {
  const displayIconByCard = () => {
    switch (card) {
      case 0:
        return <FiAnchor size="3em" />;
      case 1:
        return <FiHeart size="3em" />;
      case 2:
        return <FiHeadphones size="3em" />;
      case 3:
        return <FiMoon size="3em" />;
      case 4:
        return <FiSend size="3em" />;
      case 5:
        return <FiScissors size="3em" />;
      case 6:
        return <FiMusic size="3em" />;
      case 7:
        return <FiSun size="3em" />;
      case 8:
        return <FiLock size="3em" />;
      case 9:
        return <FiGithub size="3em" />;
      default:
        return card;
    }
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

  const markWinningCards = () => {
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

  const selectCard = () => {
    // handles any display messages from previous turn
    setDisplayMessage(null);
    // handles not allowing user to select a card while game is processing current instruction
    if (isPlayDisabled) return;
    // handles clicking the same card for both selections
    if (index === indexOfFirstSelection) return;
    setIsPlayDisabled(true);
    setSelectionCount(selectionCount + 1);

    // check if we have selected 2 cards yet

    // if we haven't...
    let newArray = [];

    for (let i = 0; i < isFlipped.length; i++) {
      if (isFlipped[i] === 2) {
        newArray.push(2);
      } else if (isFlipped[i] === 1) {
        newArray.push(1);
      } else if (i === index) {
        newArray.push(1);
      } else {
        newArray.push(0);
      }
    }
    resetFlips(newArray);

    // if we selected our 2nd card...
    // check to see if it matches the first selection

    if (selectionCount === 0) {
      setFirstSelection(card);
      setIndexOfFirstSelection(index);
      setIsPlayDisabled(false);
    }
    if (selectionCount === 1) {
      if (firstSelection === card) {
        // if the pair is a winning set...
        setDisplayMessage("It's a match!");
        // add to the user's score
        // mark the winning indices as a 2 and handle when the board is reinitialized so that they are not turned back over
        setTimeout(() => {
          markWinningCards();
          setUsersScore(usersScore + 1);
          setIsPlayDisabled(false);
        }, 2000);
      } else {
        // if the pair is not a match...
        setDisplayMessage("Try again");
        setTimeout(() => {
          resetBoard(newArray);
          setIsPlayDisabled(false);
        }, 2000);
      }
      // reset the board
      setGuessCount(guessCount + 1);
      setFirstSelection(null);
      setIndexOfFirstSelection(null);
    }
  };

  return (
    <div className="single-card" onClick={() => selectCard()}>
      {isFlipped[index] ? displayIconByCard() : null}
    </div>
  );
}

export default SingleCard;
