import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth/login/logout";
export default function MainPage() {
  return (
    <>
      <h1>메인페이지</h1>
      <button>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          SignIn
        </Link>
      </button>
      <button onclick={Logout.Logout}>Logout</button>
      <button>
        <Link to="/make">게임 만들기</Link>
      </button>
    </>
  );
}
