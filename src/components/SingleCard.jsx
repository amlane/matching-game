import React from "react";
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
  FiCamera,
  FiKey,
  FiStar,
  FiSmile,
} from "react-icons/fi";

function SingleCard({
  card,
  index,
  cardQty,
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
  setIsGameWon,
  level,
  resetBoard,
  markWinningCards,
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
      case 10:
        return <FiCamera size="3em" />;
      case 11:
        return <FiKey size="3em" />;
      case 12:
        return <FiStar size="3em" />;
      case 13:
        return <FiSmile size="3em" />;
      default:
        return card;
    }
  };

  const selectCard = () => {
    // handles any display messages from previous turn
    setDisplayMessage(null);
    // handles not allowing user to select a card while game is processing current instruction
    if (isPlayDisabled) return;
    // handles clicking the same card for both selections
    if (index === indexOfFirstSelection) return;
    // handles if user selects a card that's already been matched
    // if the index of the current card selected is a 2 in isFlipped, return;
    if (isFlipped[index] === 2) return;

    // if passes all error handling...
    setIsPlayDisabled(true);
    setSelectionCount(selectionCount + 1);

    // flip the selected card...
    let newArray = [];

    for (let i = 0; i < isFlipped.length; i++) {
      // copy isFlipped except for our current card
      if (i === index) {
        newArray.push(1);
      } else {
        newArray.push(isFlipped[i]);
      }
    }
    resetFlips(newArray);

    // if we are on our first card...
    if (selectionCount === 0) {
      setFirstSelection(card);
      setIndexOfFirstSelection(index);
      setIsPlayDisabled(false);
    }
    // if we are on our second card...
    if (selectionCount === 1) {
      if (firstSelection === card) {
        // if the pair is a winning set...
        setDisplayMessage("It's a match!");
        // add to the user's score
        // mark the winning indices as a 2 and handle when the board is reinitialized so that they are not turned back over
        setTimeout(() => {
          markWinningCards(index);
          setUsersScore(usersScore + 1);
          setIsPlayDisabled(false);
          setDisplayMessage(null);

          // once we have found all possible matches...
          if (usersScore === cardQty / 2 - 1) {
            let topScore = localStorage.getItem(`level_${level}_top_score`);
            if (topScore > guessCount + 1 || topScore === null) {
              localStorage.setItem(`level_${level}_top_score`, guessCount + 1);
            }
            setTimeout(() => {
              setIsGameWon(true);
            }, 1000);
          }
        }, 1000);
      } else {
        // if the pair is not a match...
        setDisplayMessage("Try again");
        setTimeout(() => {
          resetBoard(newArray);
          setIsPlayDisabled(false);
          setDisplayMessage(null);
        }, 2000);
      }
      // increment the guess count
      setGuessCount(guessCount + 1);
      // reset the user's turn
      setFirstSelection(null);
      setIndexOfFirstSelection(null);
    }
  };

  return (
    <div
      className={
        isFlipped[index] === 2 ? `single-card selected-card` : `single-card`
      }
      onClick={() => selectCard()}
    >
      {isFlipped[index] ? displayIconByCard() : null}
    </div>
  );
}

export default SingleCard;
