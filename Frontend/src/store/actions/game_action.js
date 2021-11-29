import axios from "axios";
import {
  ROUND32_1_15,
  ROUND32_16,
  ROUND16_1_7,
  ROUND16_8,
  ROUND8_1_3,
  ROUND8_4,
  ROUND4_1,
  ROUND4_2,
  ROUND_FINAL,
  GAME_RESET,
  START_GAME,
} from "./types";


// 게임 시작 액션
export const startGame = async (gameId) => {
  console.log(gameId);

  const game = await axios
    .get(`/api/games/getgame/${gameId}`)
    .then((response) => response.data);

  game.images.sort(() => Math.random() - Math.random()); // 랜덤으로 순서 섞기

  console.log(game);
  return {
    type: START_GAME,
    payload: game,
  };
};

export const round32 = (imageId, gameState) => {
  const new_round16 = gameState.round16.slice();

  new_round16.push(gameState.base.find((item) => item.id === imageId));

  const request = {
    round16: new_round16,
  };

  console.log(request);

  if(gameState.round16.length < 15) {
    // 32강 1~15번째 경기
    return {
      type: ROUND32_1_15,
      payload: request,
    };
  } else {
    // 32강 마지막경기
    return {
      type: ROUND32_16,
      payload: request,
    };
  }
};

// 16강 경기
export const round16 = (imageId, gameState) => {
  const new_round8 = gameState.round8.slice();

  new_round8.push(gameState.base.find((item) => item.id === imageId));

  const request = {
    round8: new_round8,
  };

  console.log(request);

  if (gameState.round8.length < 7) {
    // 16강 1~7번째 경기
    return {
      type: ROUND16_1_7,
      payload: request,
    };
  } else {
    // 16강 마지막경기
    return {
      type: ROUND16_8,
      payload: request,
    };
  }
};

// 8강 경기
export const round8 = (imageId, gameState) => {
  const new_round4 = gameState.round4.slice();

  new_round4.push(gameState.base.find((item) => item.id === imageId));

  const request = {
    round4: new_round4,
  };

  console.log(request);
  if (gameState.round4.length < 3) {
    // 8강 1~3번째 경기
    return {
      type: ROUND8_1_3,
      payload: request,
    };
  } else {
    // 8강 마지막 경기
    return {
      type: ROUND8_4,
      payload: request,
    };
  }
};

// 4강 경기
export const round4 = (imageId, gameState) => {
  const new_round2 = gameState.round2.slice();

  new_round2.push(gameState.base.find((item) => item.id === imageId));

  const request = {
    round2: new_round2,
  };

  console.log(request);

  if (gameState.round2.length < 1) {
    // 4강 첫 경기
    return {
      type: ROUND4_1,
      payload: request,
    };
  } else {
    // 4강 마지막 경기
    return {
      type: ROUND4_2,
      payload: request,
    };
  }
};

// 결승전
export const final_game = (imageId, gameState) => {
  const request = gameState.base.find((item) => item.id === imageId);
  console.log(request);
  return {
    type: ROUND_FINAL,
    payload: request,
  };
};

export const game_reset = () => {
  return {
    type: GAME_RESET,
  };
};