import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Register } from "../auth/controller/userController";
import { useDispatch } from "react-redux";

export default function RegisterForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    name: "",
    passwrod: "",
    cofirmpasswrod: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setState(data);
    console.log(data);
    Register(dispatch, navigate, data);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="email">이메일</label>
      <input type="text" {...register("email")} />
      <span style={{ color: "red" }}>
        {errors.email && "이메일 형식이 맞지 않습니다."}
      </span>
      <label htmlFor="name">이름</label>
      <input type="text" {...register("name")} />
      <span style={{ color: "red" }}>
        {errors.name && "이름 형식이 맞지 않습니다."}
      </span>
      <label htmlFor="password">비밀번호</label>
      <input type="text" {...register("password")} />
      <span style={{ color: "red" }}>
        {errors.password && "비밀번호 형식이 맞지 않습니다."}
      </span>
      <label htmlFor="checkPw">비밀번호 확인</label>
      <input type="text" {...register("checkPw")} />
      <span style={{ color: "red" }}>
        {errors.checkPw && "비밀번호가 맞지 않습니다."}
      </span>
      <button type="submit">회원가입</button>
    </form>
  );
}
