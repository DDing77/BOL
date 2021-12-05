import React from "react";
import { useSelector } from "react-redux";
import "../style/gamePage.css";

export default function GameTitle() {
  const gameState = useSelector((state) => state.game);

  return (
    <>
      {gameState.round !== 2 ? (
        <span className="gameTitle">
          {gameState.title} {gameState.round}강 :{" "}
          {gameState.sequence + 1} / {gameState.round / 2} Round
        </span>
      ) : (
        <span className="gameTitle"> 
        {gameState.title} 결승 
        </span>
      )}
    </>
  );
}
