import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as UploadImage from "../middleware/uploadImage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../style/gameCreateForm.css";

export default function GameCreateForm() {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    file: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    await UploadImage.UploadImage(data);
    navigate("/");
  };

  return (
    <div className="registerForm-cotainer">
      <div className="registerForm-title">
        <span className="registerForm-title"> 이상형 월드컵 만들기</span>
      </div>
      <form
        className="registerForm-section"
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
      >
        <input
          name="title"
          type="text"
          placeholder="게임 타이틀을 입력하세요"
          {...register("title", { required: true, maxLength: 30 })}
        />
        <span style={{ color: "red" }}>
          {errors.name && "이름 형식이 맞지 않습니다."}
        </span>
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <input
          name="description"
          type="text"
          placeholder="게임 소개를 입력하세요"
          {...register("description", { required: true, maxLength: 30 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <input
          name="image"
          placeholder="이미지를 등록하세요!"
          type="file"
          multiple
          {...register("image", {
            required: true,
          })}
        />
        <button type="submit">게임 생성</button>
      </form>
    </div>
  );
}
