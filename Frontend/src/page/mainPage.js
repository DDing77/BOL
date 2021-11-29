import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GameComponent from "../components/gameComponent";

export default function MainPage() {
  const allState = useSelector((store) => store);

  console.log("메인화면");
  console.log(allState);

  return (
    <>
      <h1>메인페이지</h1>
      <div style={{ display: "flex" }}>
        <button>
          <Link to="/make">게임 만들기</Link>
        </button>
        <button>게임수정하기</button> {/* 로그인후 보이기 */}
      </div>
      <div className="test" style={{ display: "flex", flexFlow: "row" }}>
        <GameComponent />
      </div>
    </>
  );
}
