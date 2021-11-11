import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Login from "../auth/controller/loginController";
import axios from "axios";

export default function MainHeader() {
  let navigate = useNavigate(); // 권한체크로 로직변경하자

  const [state, setState] = useState("");

  useEffect(() => {
    console.log("프로필요청")
    
    axios.get("/api/users/profile").then((req, res) => setState(req.data));
  }, [navigate]);

  
  // console.log(navigate);
  return (
    <div>
        {state.name}님 반갑습니다!
      <button>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          SignIn
        </Link>
      </button>
      <button onClick={()=> Login.Logout(navigate)}>Logout</button>
    </div>
  );    
}
