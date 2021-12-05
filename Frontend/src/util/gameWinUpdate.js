import axios from "axios";

// 승리 횟수 증가
export const updateWin = async (imageId) => {
  let body = {
    imageId: imageId,
  };
  axios.post("/api/games/win", body).then((response) => console.log(response));
};

// 우승, 승리 횟수 증가
export const updateChampion = async (imageId) => {
  let body = {
    imageId: imageId,
  };
  axios
    .post("/api/games/champion", body)
    .then((response) => console.log(response));
};
