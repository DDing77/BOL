import axios from 'axios';

export function Logout (props) {

    axios.get('/api/users/logout').then((req, res) => {
        console.log('===로그아웃 시작==')
        console.log(req.data)
        if(req.data) {
            console.log('============세션 지우기 성공')
           sessionStorage.clear()
            window.location.href="/"
        }
        // if(res.session) {
        //     console.log(res.data.email + 'logout');
        //     alert('로그아웃 성공');
        // } else {
        //     alert('로그아웃 실패');
        // }
        }
    );
};
