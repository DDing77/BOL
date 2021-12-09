import axios from "axios";

// 게임 삭제
export const deleteGame = async (gameId) => {
  const request = await axios
    .post("/api/games/delete", gameId)
    .then((response) => response.data);
  console.log(request);
};

// 게임 수정
export const editImage = async (data) => {
  const request = await axios
    .post("/api/games/edit", data)
    .then((response) => response.data);
  console.log(request);
};
