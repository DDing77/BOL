import axios from "axios";
import { logoutUser, registerUser } from "../../store/actions/user_action";


// 로그인 요청 => 리펙토링하기
export const onLoginHandler = (data) => {
  console.log("핸들러전달");
  console.log(data);

  console.log("click login");
  console.log("Email : ", data.Email);
  console.log("PW : ", data.Password);

  let body = {
    email: data.Email,
    password: data.Password,
  };

  axios
    .post("/api/users/login", body)
    .then((res) => {
      console.log(res);
      console.log("res.data.email :: ", res.data.email);
      console.log("res.data.password :: ", res.data.password);
      if (res.data.email === body.email) {
        console.log("====================로그인 성공!");
        sessionStorage.setItem("user", JSON.stringify(true));
        // // props.history.push(`/personal/${res.data.id}`);
        // window.location.href = "/";
      } else {
        alert("Login error");
      }
    })
    .catch();
};

// 로그아웃
export const Logout = (dispath, navigate ) => {
  console.log("===로그아웃 시도===");
  dispath(logoutUser()).then(req => {
    console.log(req);
    if(req.payload.success) {
      console.log("===로그아웃 성공===");
      sessionStorage.clear();
    }
    navigate("/");
  })
};

// 회원가입
export const Register = (dispath, navigate, data) => {
  console.log("===회원가입 시도===");

  let body = {
    email: data.email,
    name: data.name,
    password: data.password
  }
  console.log(body)
  dispath(registerUser(body)).then(res => {
    console.log(res);
    if(res.payload.registerSuccess) {
      console.log("===회원가입 성공===");
    }
    navigate("/");
  })
}
