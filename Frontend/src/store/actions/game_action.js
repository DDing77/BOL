import axios from "axios";
import {
  ROUND16_1_7,
  ROUND16_8,
  ROUND8_1_3,
  ROUND8_4,
  ROUND4_1,
  ROUND4_2,
  ROUND_FINAL,
  GAME_RESET,
  GET_ALL_GAME,
  GET_GAME,
  START_GAME,
} from "./types";

export const test_startGame = (gameId) => {
  // gameId로 요청
  //   const request = axios
  //     .get(`/api/games/${gameId}`)
  //     .then((response) => response.data);
  //   return {
  //     type: START_GAME,
  //     payload: request,
  //   };

  // Test용
  const request = {
    gameId: 1,
    base: base.sort(() => Math.random() - Math.random()),
  };
  console.log("base 랜덤정렬");
  console.log(base);

  return {
    type: START_GAME,
    payload: request,
  };
};

export const startGame = (gameId) => {
  const game = axios.get("/api/getgames/one", gameId).then(res=>res.data)
  const request = {
    
  }

}

export const round16_1_7 = (round8, id, gameState) => {
  const new_round8 = round8.slice();

  new_round8.push(gameState.base.find((item) => item.id === id));

  const request = {
    round8: new_round8,
  };

  console.log(request);

  return {
    type: ROUND16_1_7,
    payload: request,
  };
};

export const round16_8 = (round8, id, gameState) => {
  const new_round8 = round8.slice();

  new_round8.push(gameState.base.find((item) => item.id === id));

  const request = {
    round8: new_round8,
  };

  console.log(request);

  return {
    type: ROUND16_8,
    payload: request,
  };
};

export const round8_1_3 = (round4, id, gameState) => {

  const new_round4 = round4.slice();

  new_round4.push(gameState.base.find((item) => item.id === id));

  const request = {
    round4: new_round4,
  };

  console.log(request);

  return {
    type: ROUND8_1_3,
    payload: request,
  };
};

export const round8_4 = (round4, id, gameState) => {

  const new_round4 = round4.slice();

  new_round4.push(gameState.base.find((item) => item.id === id));

  const request = {
    round4: new_round4,
  };

  console.log(request);

  return {
    type: ROUND8_4,
    payload: request,
  };
};

export const round4_1 = (round2, id, gameState) => {
  const new_round2 = round2.slice();

  new_round2.push(gameState.base.find((item) => item.id === id));

  const request = {
    round2: new_round2,
  };

  console.log(request);

  return {
    type: ROUND4_1,
    payload: request,
  };
};

export const round4_2 = (round2, id, gameState) => {
  const new_round2 = round2.slice();

  new_round2.push(gameState.base.find((item) => item.id === id));

  const request = {
    round2: new_round2,
  };

  console.log(request);

  return {
    type: ROUND4_2,
    payload: request,
  };
};

export const final_game= (id,gameState) => {
  const request = gameState.base.find((item) => item.id === id)
  console.log(request)
  return{
    type:ROUND_FINAL,
    payload:request,
  }
}

export const game_reset = () => {
  
  return{
    type:GAME_RESET
  }
}

const base = [
  {
    id: 1,
    name: "장원영",
    group: "아이즈원",
    img: "wonyoung.jpg",
  },
  {
    id: 2,
    name: "정연",
    group: "트와이스",
    img: "jungyeon.jpg",
  },
  {
    id: 3,
    name: "미나토자키 사나",
    group: "트와이스",
    img: "sana.jpg",
  },
  {
    id: 4,
    name: "김세정",
    group: "구구단",
    img: "sejung.jpg",
  },
  {
    id: 5,
    name: "청하",
    group: "솔로",
    img: "chungha.jpg",
  },
  {
    id: 6,
    name: "김소혜",
    group: "(전) I.O.I",
    img: "sohye.jpeg",
  },
  {
    id: 7,
    name: "조이",
    group: "레드벨벳",
    img: "joy.png",
  },
  {
    id: 8,
    name: "혼다 히토미",
    group: "아이즈원",
    img: "hitomi.jpeg",
  },
  {
    id: 9,
    name: "소연",
    group: "(여자)아이들",
    img: "soyun.jpeg",
  },
  {
    id: 10,
    name: "제니",
    group: "블랙핑크",
    img: "jeny.jpeg",
  },
  {
    id: 11,
    name: "나연",
    group: "트와이스",
    img: "nayun.jpg",
  },
  {
    id: 12,
    name: "은하",
    group: "여자친구",
    img: "eunha.jpg",
  },
  {
    id: 13,
    name: "손나은",
    group: "에이핑크",
    img: "son.jpg",
  },
  {
    id: 14,
    name: "정채연",
    group: "다이아",
    img: "jcy.jpg",
  },
  {
    id: 15,
    name: "아이유",
    group: "솔로",
    img: "iu.jpg",
  },
  {
    id: 16,
    name: "야부키 나코",
    group: "아이즈원",
    img: "yabuki-nako.jpg",
  },
];
