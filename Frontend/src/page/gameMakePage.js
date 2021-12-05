import React from "react";
import GameCreateForm from "../components/gameCreateForm";
export default function GameMakePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          top: "150px",
          backgroundColor: "white",
        }}
      >
        <GameCreateForm />
      </div>
    </>
  );
}
