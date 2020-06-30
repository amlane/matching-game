import React from "react";
import Confetti from "react-confetti";
import "../styles/GameWon.css";

function GameWon({
  guessCount,
  setIsGameWon,
  cardQty,
  setCardQty,
  setUsersScore,
  setGuessCount,
  level,
  setLevel,
}) {
  const topScore = localStorage.getItem(`level_${level}_top_score`);

  const nextLevel = () => {
    setIsGameWon(false);
    setGuessCount(0);
    setUsersScore(0);
    setLevel(level + 1);
    setCardQty(cardQty + 4);
  };

  const restartGame = () => {
    setIsGameWon(false);
    setGuessCount(0);
    setUsersScore(0);
    setLevel(1);
    setCardQty(12);
  };

  return cardQty === 28 ? (
    <div className="final-winner">
      <Confetti height={window.innerHeight} />
      <section className="winner-modal">
        <div className="winner-msg">
          <h2>You won the game!</h2>
          <h2>Guesses: {guessCount}</h2>
          <h2>
            PR for Level {level}: {topScore}
          </h2>
        </div>
        <section className="top-scores">
          <h3>Your Personal Records:</h3>
          {[1, 2, 3, 4, 5].map((num) => {
            return (
              <div className="levels">
                <span>Level {num}:</span>{" "}
                {localStorage.getItem(`level_${num}_top_score`)}
              </div>
            );
          })}
        </section>
        <button onClick={() => restartGame()}>Play again</button>
      </section>
    </div>
  ) : (
    <div className="confetti-ctr">
      <Confetti height={window.innerHeight} />
      <section className="winner-modal">
        <h2>You win!</h2>
        <h2>Guesses: {guessCount}</h2>
        <h2>
          PR for Level {level}: {topScore}
        </h2>
        <button onClick={() => nextLevel()}>Next Level</button>
      </section>
    </div>
  );
}

export default GameWon;
