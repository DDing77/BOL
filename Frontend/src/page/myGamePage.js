import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";
import * as GameSetting from "../util/gameSetting";
import { getUserGames } from "../store/actions/game_action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/gameComponent.css";

export default function MyGamePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gameStore = useSelector((store) => store.game);
  console.log(gameStore);

  const { userId } = useParams();
  const [gameInfo, setGameInfo] = useState();
  console.log(gameInfo);

  useEffect(() => {
    dispatch(getUserGames(userId));
    const get = async () => {
      const games = await GetGame.getUserGames(userId);
      setGameInfo(games);
    };
    get();
  }, [dispatch]);

  console.log(gameInfo);

  const deleteGame = async (gameId) => {
    console.log(userId);
    let body = {
      gameId: gameId,
    };
    await GameSetting.deleteGame(body);
    dispatch(getUserGames());
    navigate(`/`);
  };

  const renderAllGameComponent = () =>
    gameInfo.map((content, index) => (
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
            <span className="gameProduct-title">
              {content.title}({content.images.length}강)
            </span>
            <span className="gameProduct-description">
              {content.description}
            </span>
            <span className="gameProduct-author">
              제작자 : {content.author.name}
            </span>
          </div>
          <div className="gameProduct-btn">
            <button className="btn-start">
              <Link className="eidt" to={`/game/setting/${content.id}`}>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ paddingRight: "7px" }}
                />
                수정
              </Link>
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteGame(content.id)}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ paddingRight: "7px" }}
              />
              삭제
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "wheat" }}>
        나의 게임 리스트
      </h1>
      <div className="gameComponent">
        {gameInfo ? renderAllGameComponent() : "로딩 중"}
      </div>
    </div>
  );
}
