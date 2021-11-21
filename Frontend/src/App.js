import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isLogin from "./auth/isLogin";
import { loginCheck } from "./store/actions/user_action";

import MainHeader from "./components/mainHeader";
import MainPage from "./page/mainPage";
import LoginPage from "./page/loginPage";
import RegisterPage from "./page/registerPage";
import GameMakePage from "./page/gameMakePage";
import GamePage from "./page/gamePage";

function App() {
  const dispatch = useDispatch();

  const isLoginState = useSelector((store) => store.user);
  // 현재 사용자가 로그인한 상태인지 확인
  let authenticated = isLogin();

  useEffect(() => {
    // 세션에 유저정보가 있으면 진행
    authenticated = isLogin();
    if (authenticated) {
      console.log("프로필요청");
      dispatch(loginCheck()); // 세션에 있는 유저의 프로필 정보를 가져옴
    }
  }, [isLoginState.isLogin]);

  console.log(isLoginState);
  console.log("app");
  console.log("auth : " + authenticated);
  console.log("isLogin : " + isLogin());
  console.log(
    "sessionStorage.user : " + JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(sessionStorage);
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/make" element={<GameMakePage />} />
        <Route  path="/game/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
