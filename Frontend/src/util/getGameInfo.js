import React from "react";
import axios from "axios";

export const getAllGame = async () => {
  const request =  axios.get("/api/getgames/").then(response => response.data);
  console.log(request)
  return await request
};

export const getGame = (gameId) => {};
