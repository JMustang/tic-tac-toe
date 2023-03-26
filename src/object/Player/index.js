import React from "react";
import "./style.css";
import playerX from "../../image/X.png";

const Player = () => (
  <button className="player">
    <img src={playerX} className="playerX" alt="player X" />
  </button>
);

export default Player;
