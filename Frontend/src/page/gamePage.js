import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../store/actions/game_action";


export default function GamePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gameState = useSelector((store) => store.game);
//   const path = "../images/";

  console.log(gameState.views[0]);
  console.log(id);
  console.log("게임실행 페이지");

  useEffect(() => {
    dispatch(startGame());
  }, [gameState.gameId]);

  return (
    <>
      <div>
        <span>{gameState.round}강</span>
        {gameState.views.length > 0 ? (
          <div style={{display:"flex"}}>
            <img style={{width: "300px", height:"450px"}}
              src={`../images/${gameState.views[0].img}`}
            />
            <img style={{width: "300px", height:"450px"}}
              src={`../images/${gameState.views[1].img}`}
            />
          </div>
        ) : (
          <div> loading...</div>
        )}
      </div>
    </>
  );
}
