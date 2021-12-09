import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as CommentAction from "../store/actions/comment_action";
import * as GetGame from "../util/getGameInfo";
import Comment from "../components/comment";
import Footer from "../components/footer";
import GameRank from "../components/gameRank";
import Pagination from "../util/pagination";
import "../style/gameBoardPage.css";

export default function GameBoardPage() {
  const { gameId } = useParams();
  const [gameInfo, setGameInfo] = useState();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [imagePerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CommentAction.getComment(gameId));
    const get = async () => {
      const games = await GetGame.getGame(gameId);
      console.log(games.images);

      games.images.sort(function (a, b) {
        if (a.champion !== b.champion) {
          return b.champion - a.champion;
        } else {
          return b.win - a.win;
        }
      });
      setGameInfo(games);
    };
    get();
  }, [gameId]);
  console.log(gameInfo);
  // 현재 페이지 가져오기
  // const indexOfLastImage = currentPage * imagePerPage; // 1*10 = 10번 이미지
  // const indexOfFirstImage = indexOfLastImage - imagePerPage; // 10 -10 = 0번 이미지
  // const currentImages = gameInfo.slice(indexOfFirstImage, indexOfLastImage); // 0~10번까지 이미지

  // const paginate = pageNum => setCurrentPage(pageNum);

  const renderImageInfo = () =>
    gameInfo.images.map((content, index) => (
      <tr>
        <td className="tbody_rank">{index + 1}</td>
        <td className="tbody_img">
          <img
            className="rank-img"
            alt={index}
            src={"httP://localhost:5000/" + `${content.path}`}
          />
        </td>
        <td className="tbody_name">{content.name}</td>
        <td className="tbody_champion">{content.champion}</td>
        <td className="tbody_win">{content.win}</td>
      </tr>
    ));

  return (
    <div>
      {gameInfo ? (
        <div className="container-table">
          <table className="rank-table">
            <thead>
              <tr>
                <th className="thead_rank">순위</th>
                <th className="thead_img">이미지</th>
                <th className="thead_name">이름</th>
                <th className="thead_champion">우승 횟수</th>
                <th className="thead_win">
                  승리 횟수
                  <br />
                  (1:1 매칭)
                </th>
              </tr>
            </thead>
            <tbody>
              {renderImageInfo()}
              {/* <GameRank images={gameInfo.images}/> */}
            </tbody>
          </table>
        </div>
      ) : (
        "데이터없음"
      )}
     <Comment/>
     <footer><Footer/></footer>
    </div>
  );
}
