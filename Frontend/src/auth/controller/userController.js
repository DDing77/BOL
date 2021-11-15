import {
  loginUser,
  logoutUser,
  registerUser,
} from "../../store/actions/user_action";

// 로그인 요청 
export const Login = (dispath, navigate, data) => {
  console.log("===로그인 시도===");

  let body = {
    email: data.Email,
    password: data.Password,
  };

  dispath(loginUser(body))
    .then((res) => {
      console.log(res);
      if (res.payload.success) {
        console.log("===로그인 성공===");
        sessionStorage.setItem("user", JSON.stringify(true));
      } else {
        alert("===로그인 실패===");
      }
      navigate("/");
    })
    .catch();
};


// 로그아웃
export const Logout = (dispath, navigate) => {
  console.log("===로그아웃 시도===");
  dispath(logoutUser()).then((req) => {
    console.log(req);
    if (req.payload.success) {
      console.log("===로그아웃 성공===");
      sessionStorage.clear();
    }
    navigate("/");
  });
};

// 회원가입
export const Register = (dispath, navigate, data) => {
  console.log("===회원가입 시도===");

  let body = {
    email: data.email,
    name: data.name,
    password: data.password,
  };

  dispath(registerUser(body)).then((res) => {
    console.log(res.payload);
    if (res.payload != null) {
      console.log("===회원가입 성공===");
    }
    navigate("/");
  });
};
