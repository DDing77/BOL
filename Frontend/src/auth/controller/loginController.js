import react from 'react';
import axios from 'axios';

// 로그인 요청
export const onLoginHandler = (data) => {
        console.log("핸들러전달")
        console.log(data);

        console.log('click login')
        console.log('Email : ', data.Email)
        console.log('PW : ', data.Password)

        let body = {
            email: data.Email,
            password: data.Password
        }

        axios.post("/api/users/login", body)
        .then((res) => {
          console.log(res);
          console.log("res.data.email :: ", res.data.email);
          console.log("res.data.password :: ", res.data.password);
          if (res.data.email === data.Email) {
            console.log("====================로그인 성공!");
            sessionStorage.setItem("user", JSON.stringify(true));
            // props.history.push(`/personal/${res.data.id}`);
            window.location.reload();
          } else {
            alert("Login error");
          }
        })
        .catch();
}