import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as CommentAction from "../store/actions/comment_action";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../style/comment.css";

export default function CommentForm() {
  const { gameId } = useParams();
  const userState = useSelector((store) => store.user);
  console.log(userState);
  const commentState = useSelector((store) => store.comment);
  const schema = yup.object().shape({
    Content: yup.string().min(1).max(30).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data.Content);
    let body = {
      commenter: { name: userState.user.name },
      gameId: gameId,
      content: data.Content,
    };
    dispatch(CommentAction.createComment(body, commentState.comments));
    alert("댓글을 작성하셨습니다.")
  };
  console.log(commentState.comments);

  const dispatch = useDispatch();

  return (
    <div className="commentForm-container">
      <form className="commentForm-section" onSubmit={handleSubmit(submitForm)}>
        <input className="commentForm-input"
          name="comment"
          type="text"
          placeholder="댓글을 입력하세요"
          {...register("Content")}
        />
        <button className="commentForm-btn" type="submit">등록</button>
        <span style={{ color: "red" }}>
          {errors.Content && "입력하지 않았거나 텍스트의 길이가 깁니다."}
        </span>
      </form>
    </div>
  );
}
