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
} from "react-icons/fi";

function SingleCard({ card }) {
  const displayIconByCard = () => {
    switch (card) {
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
      case 0:
        return <FiAnchor size="3em" />;
      default:
        return card;
    }
  };
  return <div className="single-card">{displayIconByCard()}</div>;
}

export default SingleCard;
