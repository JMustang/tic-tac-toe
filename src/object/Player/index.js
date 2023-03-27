import React from "react";
import "./style.css";
import playerX from "../../image/X.png";
import playerO from "../../image/0.png";

const Player = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player">
      <img
        src={players[player]}
        className="playerX"
        alt={`player ${player.toUpperCase()}`}
      />
    </button>
  );
};

export default Player;
