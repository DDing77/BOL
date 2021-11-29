import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GameTitle from "../components/gameTitle";
import {
  round16_1_7,
  round16_8,
  round8_1_3,
  round8_4,
  round4_1,
  round4_2,
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
  //   const path = "../images/";
  console.log(gameState);
  console.log(gameId);
  console.log("게임실행 페이지");

  useEffect(() => {
    dispatch(startGame(gameId));
  }, []);

  const onClickHandler = async (gameId) => {
    console.log(gameState.round8);
    console.log(gameState.round4);

    if (gameState.round8.length < 7) {
      dispatch(round16_1_7(gameState.round8, gameId, gameState));
    }
    if (gameState.round8.length === 7) {
      dispatch(round16_8(gameState.round8, gameId, gameState));
      console.log("===16강종료===");
    }
    if (gameState.round4.length < 3 && gameState.round8.length > 7) {
      dispatch(round8_1_3(gameState.round4, gameId, gameState));
      console.log("===8강 첫경기===");
    }
    if (gameState.round4.length === 3) {
      dispatch(round8_4(gameState.round4, gameId, gameState));
      console.log("===8강종료===");
    }
    if (gameState.round2.length < 1 && gameState.round4.length > 3) {
      dispatch(round4_1(gameState.round2, gameId, gameState));
      console.log("===4강 첫경기===");
    }
    if (gameState.round2.length === 1) {
      await dispatch(round4_2(gameState.round2, gameId, gameState));
      console.log("===4강종료===");
    }
    if (gameState.round2.length === 2) {
      dispatch(final_game(gameId, gameState));
      console.log("===결승===");
    }
    if (gameState.end) {
      dispatch(game_reset());
      console.log("게임초기화 후 메인화면 이동!");
      navigate("/");
    }
  };

  console.log("sequence :" + gameState.sequnce);

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
