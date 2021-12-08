import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as CommentAction from "../store/actions/comment_action";
import CommentForm from "./commentForm";
import * as CommenteSetting from "../util/commentSetting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../style/comment.css";

export default function Comment() {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const userState = useSelector((store) => store.user);
  const commentState = useSelector((store) => store.comment);
  console.log(userState);
  console.log(commentState);
  console.log(gameId);

  // 시간 포맷 변경
  const subString = (string) => {
    const newString1 = string.substring(1, 11);
    const newStringHour = string.substring(12, 14);
    const newStringMin = string.substring(15, 17);
    const Hour = (Number(newStringHour) + 10) % 24;
    const newString =
      newString1 + "(" + String(Hour) + ":" + newStringMin + ")";
    return newString;
  };

  // 본인 댓글 판별
  const isMyComment = (element) => {
    if (userState.user) {
      console.log(userState.user);
      if (userState.user.id === element.userId) {
        return true;
      }
    }
    return false;
  };

  const rederComments = () =>
    commentState.comments.map((element, index) => (
      <div className="comment-container">
        <div className="comment-icon">
          <FontAwesomeIcon
            icon={faUser}
            size={"4x"}
            style={{ color: "rgb(111, 112, 112)" }}
          />
        </div>
        <div className="comment-section">
          <div className="comment-section-head">
            <div className="comment-commenter">{element.commenter.name}</div>
            <div className="comment-time">
              {subString(`"${element.createAt}"`)}
            </div>
            {isMyComment(element) ? (
              <div className="comment-isMine">내 댓글</div>
            ) : (
              ""
            )}
          </div>
          <div className="comment-content">{element.content}</div>
        </div>
        {isMyComment(element) ? (
          <div className="comment-btn-box">
            <button className="comment-btn" onClick={() => {
                CommenteSetting.editeComment(dispatch, element.id, gameId);
              }}>수정</button>
            <button
              className="comment-btn"
              onClick={() => {
                CommenteSetting.deleteComment(dispatch, element.id, gameId);
              }}
            >
              삭제
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    ));

  return (
    <div style={{ backgroundColor: "white" }}>
        <h1 className="comment-info">댓글 리스트</h1>
      <CommentForm />
      {commentState.comments.length > 0 ? rederComments() : "댓글 없음"}
    </div>
  );
}
