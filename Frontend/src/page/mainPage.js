import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  console.log("메인화면")
  return (
    <>
      <h1>메인페이지</h1>
      <button>
        <Link to="/make">게임 만들기</Link>
      </button>
    </>
  );
}
