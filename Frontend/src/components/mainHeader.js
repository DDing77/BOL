import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as UserController from "../auth/controller/userController";
import { useDispatch, useSelector } from "react-redux";

export default function MainHeader() {
  const dispatch = useDispatch();
  let navigate = useNavigate(); // 권한체크로 로직변경하자

  const user = useSelector((store) => store.user);
  console.log(user);
  // console.log(navigate);
  return (
    <>
      {!user.isLogin ? (
        <div>
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              SignIn
            </Link>
          </button>
          <button>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              SignUp
            </Link>
          </button>
        </div>
      ) : (
        <div>
          {user.user.name} 님 반갑습니다!{" "}
          <button onClick={() => UserController.Logout(dispatch, navigate)}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
