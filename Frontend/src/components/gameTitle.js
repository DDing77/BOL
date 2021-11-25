import React from "react";
import { useSelector } from "react-redux";
import "../style/gamePage.css";

export default function GameTitle() {
  const gameState = useSelector((state) => state.game);

  return (
    <>
      {gameState.round !== 2 ? (
        <span className="gameTitle">
          {/* 여긴 나중에 디비에서 불러오기 (게임 이름 )*/}
          여자 아이돌 이상형 월드컵 {gameState.round}강 :{" "}
          {gameState.sequence + 1} / {gameState.round / 2} Round
        </span>
      ) : (
        <span className="gameTitle">
          {/* 여긴 나중에 디비에서 불러오기 (게임 이름 )*/}
          결승 
        </span>
      )}
    </>
  );
}
