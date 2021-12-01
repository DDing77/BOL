import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";
import GameRank from "../components/gameRank";
import  Pagination  from "../util/pagination";

export default function GameBoardPage() {
  const { gameId } = useParams();
  const [gameInfo, setGameInfo] = useState();
  const [currentPage, setCurrentPage] = useState(1); 
	const [imagePerPage] = useState(10); 

  useEffect(() => {
    const get = async () => {
      const games = await GetGame.getGame(gameId);
      console.log(games.images);
      games.images.sort(function(a,b) {
        return b.champion - a.champion
      })
      setGameInfo(games);
    };
    get();
  }, [gameId]);
  console.log(gameInfo)
  // 현재 페이지 가져오기
  // const indexOfLastImage = currentPage * imagePerPage; // 1*10 = 10번 이미지
  // const indexOfFirstImage = indexOfLastImage - imagePerPage; // 10 -10 = 0번 이미지
  // const currentImages = gameInfo.slice(indexOfFirstImage, indexOfLastImage); // 0~10번까지 이미지

  const paginate = pageNum => setCurrentPage(pageNum);

  // const renderImageInfo = () =>
  //   gameInfo.images.map((content, index) => (
  //     <tr>
  //       <td>{index + 1}</td>
  //       <td>
  //         <img
  //           //   className="img-box"
  //           style={{ width: "100px" }}
  //           alt={index}
  //           src={"httP://localhost:5000/" + `${content.path}`}
  //         />
  //       </td>
  //       <td>{content.name}</td>
  //       <td>{content.champion}</td>
  //       <td>{content.win}</td>
  //     </tr>
  //   ));

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
            <tbody>
              <GameRank images={gameInfo.images}/>
              </tbody>
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
