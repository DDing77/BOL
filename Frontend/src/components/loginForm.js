import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
  import * as Login from "../auth/controller/loginController";

function LoginForm(props) {
  let navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = async (data) => {
    setState(data);
    console.log(data);
    await Login.onLoginHandler(data);
    navigate("/");
  };
  console.log("로그인폼 렌더링");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        name="email"
        type="email"
        placeholder="이메일을 입력하세요"
        {...register("Email", { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === "required" && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <input
        name="password"
        placeholder="비밀번호를 입력하세요"
        type="password"
        {...register("Password", {
          required: true,
        })}
      />
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
