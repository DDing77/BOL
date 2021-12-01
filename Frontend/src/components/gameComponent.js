import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faListOl } from "@fortawesome/free-solid-svg-icons";
import "../style/gameComponent.css";

export default function GameComponent(userId) {
  //   // 모든 게임 불러오기
  //   if (userId === null) {
  const [gameInfo, setGameInfo] = useState();

  useEffect(() => {
    const get = async () => {
      const games = await GetGame.getAllGame();
      setGameInfo(games);
    };
    get();
  }, []);

  const renderAllGameComponent = () =>
    gameInfo.map((content,index) => (
      <div className="gameComponent-container" id={`${index}`}>
        <div className="gameProduct">
          <div className="imageSection">
            <img
              className="img-box"
              alt="image1"
              src={`httP://localhost:5000/${content.images[0].path}`}
            />
            <img
              className="img-box"
              alt="image2"
              src={`httP://localhost:5000/${content.images[1].path}`}
            />
          </div>
          <div className="gameProduct-text">
            <span className="gameProduct-title">{content.title}</span>
            <span className="gameProduct-description">
              {content.description}({content.images.length}강)
            </span>
          </div>
          <div className="gameProduct-btn">
            <button className="btn-start">
              <Link className="start" to={`/game/${content.id}`}>
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{ paddingRight: "7px" }}
                />
                게임시작하기
              </Link>
            </button>
            <button className="btn-rank">
              <Link className="rank" to={`/rank/${content.id}`} >
              <FontAwesomeIcon
                icon={faListOl}
                style={{ paddingRight: "7px" }}
              />
              랭킹보기
              </Link>
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="gameComponent">
      {gameInfo ? renderAllGameComponent() : "데이터 없음"}
    </div>
  );

  // 유저의 게임 불러오기
  //
}
