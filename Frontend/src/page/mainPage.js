import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainPage() {
  const allState = useSelector(store=> store);
  console.log("메인화면");
  console.log(allState);
  
 // 테스트 
  const gameInfo = {
    gameId: "1",
    name: "여자아이돌 월드컵",
    description: "나만의 여자아이돌을 뽑아보자"
  }

  return (
    <>
      <h1>메인페이지</h1>
      <div style={{display:"flex"}}>
      <button>
        <Link to="/make">게임 만들기</Link>
      </button>
      <button>게임수정하기</button>  {/* 로그인후 보이기 */}
      </div>
      {/* 메인화면 스켈레톤 */}
      <div style={{ width: "222px", height: "391px" }}>
        <img
          src={"../images/chungha.jpg"}
          style={{ width: "111px", height: "180px" }}
        />
        <img
          src={"../images/iu.jpg"}
          style={{ width: "111px", height: "180px" }}
        />
        <div style={{display:"grid"}}>
        <span style={{fontStyle:"italic"}}>{gameInfo.name}</span>
        <span>{gameInfo.description}</span>
        </div>
        
        <div >
       <Link to={`/game/${gameInfo.gameId}`}>게임시작하기</Link>
        <button>랭킹보기</button>
        </div>
        
      </div>
    </>
  );
}
