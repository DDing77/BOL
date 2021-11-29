import React from "react";
import axios from "axios";

// 모든 게임 정보 가져옴
export const getAllGame =async () => {
  const request = await axios.get("/api/games/allgames").then(response => 
    response.data
  );
  console.log(request)
  return request
};

// 특정 게임 정보 가져옴
export const getGame = (gameId) => {};
