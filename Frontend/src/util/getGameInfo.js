import axios from "axios";

// 모든 게임 정보 가져옴
export const getAllGame = async () => {
  const request = await axios
    .get("/api/games/allgames")
    .then((response) => response.data);
  console.log(request);
  return request;
};

// 특정 게임 정보 가져옴 (한개)
export const getGame = async (gameId) => {
  const request = await axios
    .get(`/api/games/getgame/${gameId}`)
    .then((response) => response.data);

  return request;
};

// 특정 유저 게임 정보 다가져옴
export const getUserGames = async (userId) => {
  const request = await axios
    .get(`/api/games/getusergames/${userId}`)
    .then((response) => response.data);

    return request;
};
