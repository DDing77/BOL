import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GameComponent from "../components/gameComponent";

export default function MainPage() {
  const allState = useSelector((store) => store);

  console.log(allState);

  return (
    <>
      <div>
        <GameComponent />
      </div>
    </>
  );
}
