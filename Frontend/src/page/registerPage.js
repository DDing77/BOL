import React from "react";
import RegisterForm from "../components/registerForm";
export default function RegisterPage(props) {
  console.log("회원가입페이지");
  return (
    <>
      <h1>회원가입 페이지</h1>
      <div>
        <RegisterForm />
      </div>
    </>
  );
}
