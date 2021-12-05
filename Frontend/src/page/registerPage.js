import React from "react";
import RegisterForm from "../components/registerForm";
export default function RegisterPage(props) {
  console.log("회원가입페이지");
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
        <RegisterForm />
      </div>
    </>
  );
}
