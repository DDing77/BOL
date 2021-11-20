import axios from "axios";
import { START_GAME } from "./types";

export const startGame = (dataToSumit) => {
  // gameId로 요청
  //   const request = axios
  //     .get(`/api/games/${dataToSumit}`)
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

  console.log(base);
  
  return {
    type: START_GAME,
    payload: request,
  };
};

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
