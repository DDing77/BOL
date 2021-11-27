import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import *as UploadImage from "../middleware/uploadImage";

export default function GameCreateForm() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    UploadImage.UploadImage(data);
  };

  return (
      <form
        onSubmit={handleSubmit(submitForm)}
        encType="multipart/form-data"
        style={{ display: "flex", flexFlow: "column" }}
      >
        <label htmlFor="title">게임 타이틀</label>
        <input
          name="title"
          type="text"
          placeholder="게임 타이틀을 입력하세요"
          {...register("title", { required: true, maxLength: 30 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <span>Max length exceeded</span>
        )}
        <label htmlFor="description">게임 소개</label>
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
        <input type="submit" />
      </form>
  );
}
