import React from "react";
// import { useSelector } from "react-redux";
import GameComponent from "../components/gameComponent";
import Footer from "../components/footer";

export default function MainPage() {
  // const allState = useSelector((store) => store);

  // console.log(allState);

  return (
    <>
      <div className="body-container" style={{minHeight:"80vh",width: "100%"}}>
        <GameComponent />
      </div>
      <footer><Footer/></footer>
        
    </>
  );
}
