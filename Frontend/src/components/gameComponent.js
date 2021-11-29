import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";

export default function GameComponent(userId) {
  //   // 모든 게임 불러오기
  //   if (userId === null) {
  const [gameInfo, setGameInfo] = useState();

  useEffect(() => {
    const get = async () => {
      const games = await GetGame.getAllGame();
      console.log(games);
      setGameInfo(games);
    };
    get();
  }, []);

  const renderAllGameComponent = () =>
    gameInfo.map((content) => (
      <div style={{ width: "222px", height: "391px" }}>
        <img
          alt="image1"
          src={"httP://localhost:5000/" + `${content.images[0].path}`}
          style={{ width: "111px", height: "180px" }}
        />
        <img
          alt="image2"
          src={"httP://localhost:5000/" + `${content.images[1].path}`}
          style={{ width: "111px", height: "180px" }}
        />
        <div style={{ display: "grid" }}>
          <span style={{ fontStyle: "italic" }}>{content.title}</span>
          <span>{content.description}({content.images.length}강)</span>
        </div>

        <div>
          <Link to={`/game/${content.id}`}>게임시작하기</Link>
          <button>랭킹보기</button>
        </div>
      </div>
    ));

  return <div style={{display:"flex"}}>{gameInfo ? renderAllGameComponent() : "loading"}</div>;

  // 유저의 게임 불러오기
  //
}
