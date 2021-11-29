import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GameTitle from "../components/gameTitle";
import {
  round32,
  round16,
  round8,
  round4,
  final_game,
  game_reset,
  startGame,
  test_startGame,
} from "../store/actions/game_action";
import "../style/gamePage.css";

export default function GamePage() {
  const { gameId } = useParams(); // router의 :id 값과 똑같이 써야 동작
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const gameState = useSelector((store) => store.game);

  console.log(gameState);
  console.log(gameId);
  console.log("게임실행 페이지");

  useEffect(() => {
    dispatch(startGame(gameId));
  }, []);

  const onClickHandler = async (imageId) => {
    console.log(gameState.round8);
    console.log(gameState.round4);

    if(gameState.round === 32) {
      dispatch(round32(imageId, gameState));
    }

    if(gameState.round === 16) {
      dispatch(round16(imageId, gameState));
    }

    if(gameState.round === 8) {
      dispatch(round8(imageId, gameState));
    }

    if(gameState.round === 4) {
      dispatch(round4(imageId, gameState));
    }

    if(gameState.round === 2) {
      dispatch(final_game(imageId, gameState));
    }

    if (gameState.end) {
      dispatch(game_reset());
      console.log("게임초기화 후 메인화면 이동!");
      navigate("/");
    }
  };

  console.log("sequence :" + gameState.sequence);

  return (
    <>
      <div className="gameContainer">
        <GameTitle />
        {/* {gameState.views.length > 0 && !gameState.champion ? ( */}
        <section>
          {gameState.views.map((views, index) => {
            return (
              <div className="imageInfo" key={index}>
                <img
                  className="imageDetail"
                  alt="views0"
                  src={"httP://localhost:5000/" + `${views.path}`}
                  onClick={() => {
                    onClickHandler(views.id);
                  }}
                />
                <span className="imageName">{views.name}</span>
              </div>
            );
          })}
          <span className="vs">VS</span>
        </section>
        {/* ) : (
          <div> loading...</div>
        )} */}
        {gameState.champion ? (
          <div className="champion">
            <img
              className="imageDetail"
              alt="champion"
              src={"httP://localhost:5000/" + `${gameState.champion.path}`}
            />
            <span className="imageName">우승! {gameState.champion.name}</span>
            <button
              onClick={() => {
                onClickHandler();
              }}
            >
              초기화
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
