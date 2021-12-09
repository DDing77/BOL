import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as GetGame from "../util/getGameInfo";
import * as GameSetting from "../util/gameSetting";
import "../style/gameSettingPage.css";

// 리팩토링하기 (지저분하게 하게 코딩함)
export default function GameMakePage() {
  const { gameId } = useParams();
  const [gameInfo, setGameInfo] = useState();
  const [imageName, setImageName] = useState();
  const [inputGame, setInputGame] = useState({
    title: '',
    description:''
  });

  const {title, description} = inputGame;

  const onGameInputChange = (event) => {
    const {value, name} = event.target;
    setInputGame({
      ...inputGame,
      [name]: value
    });
  };

  const gameEditHandler =  (event,data) => {
    event.preventDefault();
    console.log(event.target.title);
    console.log(data);
    let body ={
      gameId: data,
      title: event.target.title.value,
      description: event.target.description.value,
    }
    GameSetting.editImage(body).then(alert("수정 성공"));
  }

  useEffect(() => {
    const get = async () => {
      const games = await GetGame.getGame(gameId);
      console.log(games.images);
      setGameInfo(games);
    };
    get();
  }, [gameId]);

  // 이미지 이름 변경
  const onImageNameChange=(event) => {
    setImageName(event.currentTarget.value);
  }

  const imageEditHandler =  (event,data) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(data);
    let body ={
      imageId: data,
      name: event.target.name.value
    }
    GameSetting.editImage(body).then(alert("수정 성공"));
  }
 //

  const renderImageInfo = () =>
    gameInfo.images.map((content, index) => (
      <tr>
        <td className="tbody_rank">{index + 1}</td>
        <td className="tbody_img">
          <img
            className="rank-img"
            alt={index}
            src={"httP://localhost:5000/" + `${content.path}`}
          />
        </td>
        <td className="tbody_name">
          <form style={{border:"0px", display:"flex"}} onSubmit={(event)=> imageEditHandler(event, content.id)}>
            <input type="text" name="name" placeholder={`${content.name}`} onChange={onImageNameChange}/>
            <button style={{width:"50px"}} type="submit">수정</button>
          </form>
        </td>
      </tr>
    ));

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "wheat" }}>
        게임세부설정페이지
      </h1>

      {gameInfo ? (
        <div>
          <div
            style={{
              paddingBottom: "1rem",
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              backgroundColor:"white"
            }}
          >
            <div style={{}}>
              <h3 style={{ color: "black" }}>게임 타이틀 설명 수정</h3>
              <form
                style={{ display: "flex", flexFlow: "column", width: "300px" }} onSubmit={event=> {gameEditHandler(event, gameInfo.id)}}
              >
                <label htmlFor="title">게임 타이틀</label>
                <input type="text" placeholder={`${gameInfo.title}`} name="title"  value={title} onChange={onGameInputChange}/>
                <label htmlFor="description">게임 설명</label>
                <input type="text" placeholder={`${gameInfo.title}`} name="description" value={description} onChange={onGameInputChange}/>
                <button type="submit">수정</button>
              </form>
            </div>
          </div>
          <div className="setting-table-container">
            <table className="setting-table-section">
              <thead className="setting-table-thead">
                <tr>
                  <th className="thead_setting_rank">번호</th>
                  <th className="thead_setting_img">이미지</th>
                  <th className="thead_setting_name">이름</th>
                </tr>
              </thead>
              <tbody>
                {renderImageInfo()}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        "데이터없음"
      )}
    </div>
  );
}
