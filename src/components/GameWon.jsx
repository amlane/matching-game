import React from "react";
import Confetti from "react-confetti";
import "../styles/GameWon.css";

function GameWon({ guessCount }) {
  const topScore = localStorage.getItem("top_score");

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="confetti-ctr">
      <Confetti height={window.innerHeight} />
      <section className="winner-modal">
        <h1>You win!</h1>
        <h2>Number of Guesses: {guessCount}</h2>
        <h2>Your best score: {topScore}</h2>
        <button onClick={() => restartGame()}>Play again</button>
      </section>
    </div>
  );
}

export default GameWon;
