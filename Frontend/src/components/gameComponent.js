import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";

export default function GameComponent(userId) {
  //   // 모든 게임 불러오기
  //   if (userId === null) {
  useEffect( () => {
      const get = async () => {

      
    const gameInfo = await GetGame.getAllGame();
    console.log(gameInfo);
      }
      get();
  });
  return(
      <div></div>
  )
//   gameInfo.data.map((game) => {
//     return (
//       <div style={{ width: "222px", height: "391px" }}>
//         <img
//           alt="image1"
//           src={`${game.images.path}`}
//           style={{ width: "111px", height: "180px" }}
//         />
//         <img
//           alt="image2"
//           src={"../images/iu.jpg"}
//           style={{ width: "111px", height: "180px" }}
//         />
//         <div style={{ display: "grid" }}>
//           <span style={{ fontStyle: "italic" }}>{gameInfo.name}</span>
//           <span>{gameInfo.description}</span>
//         </div>

//         <div>
//           <Link to={`/game/${gameInfo.gameId}`}>게임시작하기</Link>
//           <button>랭킹보기</button>
//         </div>
//       </div>
//     );
//   });

  // 유저의 게임 불러오기
  //
}
