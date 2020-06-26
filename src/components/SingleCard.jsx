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
      newArray.push(0);
    }
    resetFlips(newArray);

    // reset selection count
    setSelectionCount(0);
  };

  const selectCard = () => {
    // console.log(isFlipped, index);
    if (isPlayDisabled) return;
    console.log(isPlayDisabled);
    setIsPlayDisabled(true);
    console.log(isPlayDisabled);
    setSelectionCount(selectionCount + 1);

    // check if we have selected 2 cards yet

    // if we haven't...
    let newArray = [];

    for (let i = 0; i < isFlipped.length; i++) {
      if (isFlipped[i] === 1) {
        newArray.push(1);
      } else if (i === index) {
        newArray.push(1);
      } else {
        newArray.push(0);
      }
    }
    console.log(newArray, selectionCount);
    resetFlips(newArray);

    // if we selected our 2nd card...
    // check to see if it matches the first selection

    console.log(firstSelection, card);
    if (selectionCount === 0) {
      setFirstSelection(card);
      setIsPlayDisabled(false);
    }
    if (selectionCount === 1) {
      if (firstSelection === card) {
        setDisplayMessage("It's a match!");
      } else {
        setDisplayMessage("Try again");
        setTimeout(() => {
          resetBoard(newArray);
          setIsPlayDisabled(false);
        }, 5000);
      }
    }
  };
  // console.log(isFlipped, index);
  return (
    <div className="single-card" onClick={() => selectCard()}>
      {isFlipped[index] ? displayIconByCard() : null}
    </div>
  );
}

export default SingleCard;
