import axios from "axios";

export const deleteGame = async (gameId) => {
  const request = await axios
    .post("/api/games/delete", gameId)
    .then((response) => response.data);
    console.log(request);
};
