import React from "react";
import { useNavigate } from "react-router-dom";
import GameCreateForm from "../components/gameCreateForm";
export default function GameMakePage() {
  let navigate = useNavigate();

  return (
    <>
      <h1>게임생성페이지 테스트중</h1>
      <GameCreateForm/>
    </>
  );
}
