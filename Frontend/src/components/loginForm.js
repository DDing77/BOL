import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../auth/controller/userController";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../style/loginForm.css";

function LoginForm(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().min(8).max(10).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    Login(dispatch, navigate, data);
  };

  return (
    <div className="loginForm-cotainer">
      <div className="loginForm-title">
        <span className="loginForm-title">Sign In</span>
      </div>
      <form className="loginForm-section" onSubmit={handleSubmit(submitForm)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          {...register("Email")}
        />
        <span style={{ color: "red" }}>
          {errors.Email && "이메일 형식이 맞지 않습니다."}
        </span>
        <input
          name="password"
          type="text"
          placeholder="password"
          {...register("Password")}
        />
        <span style={{ color: "red" }}>
          {errors.Password && "8글자 이상 입력하세요"}
        </span>
        <button type="submit">로그인</button>
        <button>
          <Link className="link-register" to="/register">
            회원가입
          </Link>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
