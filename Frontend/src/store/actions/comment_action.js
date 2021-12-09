import axios from "axios";
import {
  GET_COMMENT,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDITE_COMMENT,
} from "./types";

// 해당 게임의 모든 댓글 가져오기
export const getComment = async (gameId) => {
  const comments = await axios
    .get(`/api/comments/${gameId}`)
    .then((response) => response.data);
  console.log(comments);

  const request = {
    gameId: gameId,
    comments: comments,
  };

  return {
    type: GET_COMMENT,
    payload: request,
  };
};

// 댓글 생성하기
export const createComment = async (data, comments) => {
  const comment = await axios
    .post("/api/comments/", data)
    .then((response) => response.data);
  console.log(comment);

  comment.commenter = data.commenter; // 코멘터 속성 추가해서 reducer로 값 보내기
  const new_comments = comments.slice();

  new_comments.push(comment);
  console.log(new_comments);

  const request = {
    comments: new_comments,
  };

  return {
    type: CREATE_COMMENT,
    payload: request,
  };
};

// 댓글 삭제
export const deleteComment = async (body) => {
  console.log(body);
  const deleted = await axios
    .post("/api/comments/delete", body)
    .then((response) => response.data);
  console.log(deleted);

  const comments = await axios
    .get(`/api/comments/${body.gameId}`)
    .then((response) => response.data);
  console.log(comments);

  const request = {
    comments: comments,
  };
  alert("댓글을 삭제하였습니다.");
  return {
    type: DELETE_COMMENT,
    payload: request,
  };
};

// 댓글 수정
export const editeComment = async (body) => {
  console.log(body);
  const edited = await axios
    .post(`/api/comments/edite/${body.commentId}`,body)
    .then((response) => response.data);
    console.log(edited);

    const comments = await axios
    .get(`/api/comments/${body.gameId}`)
    .then((response) => response.data);
  console.log(comments);

  const request = {
    comments: comments,
  };

  alert("댓글을 수정하였습니다.");

  return {
    type: EDITE_COMMENT,
    payload: request,
  };
};
