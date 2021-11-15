import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import * as cont\ from "../auth/controller/loginController";
import { useDispatch } from "react-redux";
import { Login } from "../auth/controller/userController";

function LoginForm(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    Login(dispatch, navigate, data);
  };

  console.log("로그인폼 렌더링");

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="email">Email</label>
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
