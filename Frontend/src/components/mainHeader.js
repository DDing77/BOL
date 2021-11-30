import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as UserController from "../auth/controller/userController";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserAlt, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "../style/mainHeader.css";
export default function MainHeader() {
  const dispatch = useDispatch();
  let navigate = useNavigate(); // 권한체크로 로직변경하자

  const user = useSelector((store) => store.user);
  console.log(user);
  // console.log(navigate);
  return (
    <div className="container">
      <div className="navbar">
        <a className="nav-home">
          <Link className="nav-home-link" to="/">
            BOL
          </Link>
        </a>
        <button>
          <Link className="nav-add-link" to="/make">
            이상형 월드컵 만들기
            <FontAwesomeIcon icon={faPlusSquare} style={{paddingLeft:"7px"}}/>
          </Link>
        </button>
      </div>
      {!user.isLogin ? (
        <div  className="nav-user-container">
          <button>
            <Link className="nav-sign" to="/login">
              <FontAwesomeIcon icon={faSignInAlt} style={{paddingRight:"7px"}}/>
              Login
            </Link>
          </button>
        </div>
      ) : (
        <div className="nav-user-container">
          <div className="nav-user">
          {user.user.name}님
          <FontAwesomeIcon icon={faUserAlt} style={{paddingLeft:"7px"}}/>
          </div>
          <button className="nav-sign" onClick={() => UserController.Logout(dispatch, navigate)}>
          <FontAwesomeIcon icon={faSignInAlt} style={{paddingRight:"7px"}}/>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
