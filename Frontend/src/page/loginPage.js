import React from "react";
import LoginForm from "../components/loginForm";

function LoginPage(props) {
  console.log("로그인페이지");
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
      <LoginForm />
    </div>
    </>
  );
}

export default LoginPage;
