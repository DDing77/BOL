import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import * as cont\ from "../auth/controller/loginController";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/user_action";

function LoginForm(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setState(data);
    console.log(data);

    let body = {
      email: data.Email,
      password: data.Password,
    };

    dispatch(loginUser(body))
      .then((res) => {
        console.log(res.payload);
        if (res.payload.email === body.email) {
          console.log("===로그인 성공!===");
          sessionStorage.setItem("user", JSON.stringify(res.payload.name));
        } else {
          alert("로그인 실패");
        }
      })
      .catch();
    // await LoginHandler(data);
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
