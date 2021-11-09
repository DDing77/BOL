import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Login from "../auth/controller/loginController";
import axios from "axios";

export default function MainHeader() {
  useEffect(() => {
    axios.get("/api/users/profile").then((req, res) => setState(req.data));
  }, []);

  const [state, setState] = useState("");

  return (
    <div>
      <button>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          SignIn
        </Link>
      </button>
      <button onClick={Login.Logout}>Logout</button>
      {state.name}님 반갑습니다!
    </div>
  );
}
