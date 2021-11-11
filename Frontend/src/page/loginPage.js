import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "../components/loginForm";

function LoginPage(props) {
  console.log("로그인페이지");
  return (
    <>
      <h1>로그인페이지</h1>
      <LoginForm />
    </>
  );
}
  
export default LoginPage;
