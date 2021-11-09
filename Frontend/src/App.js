import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/mainHeader";
import LoginPage from "./page/loginPage";
import MainPage from "./page/mainPage";
import GameMakePage from "./page/gameMakePage";
function App() {
  return (
    <BrowserRouter>
      <MainHeader/>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/make" element={<GameMakePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
