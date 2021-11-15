import axios from "axios";
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, LOGIN_CHECK } from "./types";

export const loginUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const logoutUser = () => {
  const request = axios
    .get("/api/users/logout")
    .then((response) => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
};

export const loginCheck = () => {
  const request = axios
    .get("/api/users/profile")
    .then((response) => response.data);
  return {
    type: LOGIN_CHECK,
    payload: request,
  };
};

export const registerUser = (dataToSubmit) => {
  const request = axios
    .post("/api/users/", dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};
