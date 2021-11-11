import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// 로그인 요청
export const onLoginHandler = (data) => {
  console.log("핸들러전달");
  console.log(data);

  console.log("click login");
  console.log("Email : ", data.Email);
  console.log("PW : ", data.Password);

  let body = {
    email: data.Email,
    password: data.Password,
  };

  axios
    .post("/api/users/login", body)
    .then((res) => {
      console.log(res);
      console.log("res.data.email :: ", res.data.email);
      console.log("res.data.password :: ", res.data.password);
      if (res.data.email === body.email) {
        console.log("====================로그인 성공!");
        sessionStorage.setItem("user", JSON.stringify(true));
        // // props.history.push(`/personal/${res.data.id}`);
        // window.location.href = "/";
      } else {
        alert("Login error");
      }
    })
    .catch();
};

// 로그아웃
export const Logout = (navigate) => {
  

  axios.get("/api/users/logout").then((req, res) => {
    console.log("===로그아웃 시작==");
    console.log(req.data);
    if (req.data) {
      console.log("============세션 지우기 성공");
      sessionStorage.clear();
      // window.location.href = "/";
      navigate("/");
    }
  });
};
