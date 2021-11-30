import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";

export default function GameBoardPage() {
  const { gameId } = useParams();
  const [gameInfo, setGameInfo] = useState();

  useEffect(() => {
    const get = async () => {
      const games = await GetGame.getGame(gameId);
      console.log(games.images);
      setGameInfo(games);
    };
    get();
  }, []);

  const renderImageInfo = () =>
    gameInfo.images.map((content, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img
            //   className="img-box"
            style={{ width: "100px" }}
            alt={index}
            src={"httP://localhost:5000/" + `${content.path}`}
          />
        </td>
        <td>{content.name}</td>
        <td>{content.champion}</td>
        <td>{content.win}</td>
      </tr>
    ));

  return (
    <div>
      {gameInfo ? (
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th>순위</th>
                <th>이미지</th>
                <th>이름</th>
                <th>우승비율</th>
                <th>승률</th>
              </tr>
            </thead>
            <tbody>{renderImageInfo()}</tbody>
          </table>
        </div>
      ) : (
        "데이터없음"
      )}
      <div>
          댓글
      </div>
    </div>
  );
}
