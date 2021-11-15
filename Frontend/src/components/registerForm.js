import React from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../auth/controller/userController";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup';

export default function RegisterForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const schema= yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(8).max(10).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm  = (data) => {
    console.log(data);
    Register(dispatch, navigate, data);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(submitForm)}
    >
      <label htmlFor="email">이메일</label>
      <input name="email" type="email" {...register('email')}/>
	    <span style={{color:"red"}}>{errors.email && '이메일 형식이 맞지 않습니다.'}</span>
      <label htmlFor="name">이름</label>
      <input name="name" type="text" {...register('name')}/>
      <span style={{color:"red"}}>{errors.name && '이름 형식이 맞지 않습니다.'}</span>
      <label htmlFor="pw">비밀번호</label>
      <input name="password" type="text" {...register('password')}/>
      <span style={{color:"red"}}>{errors.password && '8글자 이상 입력하세요'}</span>
      <label htmlFor="checkPw">비밀번호 확인</label>
      <input name="checkPw" type="text" {...register('checkPw')}/>
      <span style={{color:"red"}}>{errors.checkPw && '비밀번호가 맞지 않습니다.'}</span>
      <button type="submit">회원가입</button>
    </form>
  );
}
