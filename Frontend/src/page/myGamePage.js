import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams  } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";
import {getUserGames} from "../store/actions/game_action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/gameComponent.css";

export default function MyGamePage(){

    const dispatch = useDispatch();
    const gameStore = useSelector((store) => store.game);
    console.log(gameStore);

    const { userId } = useParams();
    const [gameInfo, setGameInfo] = useState();
    console.log(gameInfo)
    useEffect(() => {
      dispatch(getUserGames())
      const get = async () => {
        const games = await GetGame.getUserGames(userId);
        setGameInfo(games);
      };
      get();
      
    }, [dispatch]);
    
    console.log(Array.isArray(gameInfo));
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
                <Link className="start" to={`/game/${content.id}`}>
                  <FontAwesomeIcon
                    icon={faPlay}
                    style={{ paddingRight: "7px" }}
                  />
                  게임시작하기
                </Link>
              </button>
              <button className="btn-delete" onClick={()=>false}>
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
      <div className="gameComponent">
        {gameInfo ? renderAllGameComponent() : "데이터 없음"}
      </div>
    );
}