import bcrypt from 'bcrypt';
import passport from 'passport';
import * as UserRepository from '../repositories/UserRepository';

export const SignUp = async (req, res, next) => {
    const user = req.body;
    try{
        if(!user) {
            return res.send('Error.');
        } else {
            req.body.password = await bcrypt.hash(req.body.password, 11);
            const response = await UserRepository.createUser(req.body);
            return res.status(200).send(response);
        }
    } catch (err) {
        console.error(err);
        next('에러입니다.');
    }
};

//로그인
//email, password 값중 빈값이 오면 오류
export const Login = (req, res, next) => {
    //여기 req, res, next 받을 수 있게 한번 감싸줄 수 있는 거 기억 잘하기!
    passport.authenticate('local', (err, user, info) => {
      console.log('hello');
      if (err) {
        return next(err);
      }
      if (!user) {
        console.log(info.message);
        return res.send(info.message);
      }
      req.logIn(user, err => {
        if (err) {
          console.error(err);
          return next('에러가 발생하였습니다.');
        }
        return res.send(user);
      });
    })(req, res, next);
  };

  //로그아웃. 성공시 success:true 전달
export const Logout = (req, res, next) => {
  req.logOut();
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      return next(err);
    } else {
      //connect.sid : 고유식별자 --> 고유식별자 쿠키에서 지우겠다는 의미.
      return res.clearCookie('connect.sid').status(200).send({ success: true });
    }
  });
};

//유저정보 다 끌어오는거. 임시용
export const UserInfo = async (req, res, next) => {
    try {
      const user = await UserRepository.getUsers();
      return res.send(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  
  export const UserProfile = async (req, res, next) => {
    try {
      //여기 깨끗하게 정리.
      const userProfile = await UserRepository.findUserById(req.session.passport.user.id);
      return res.send({ id: userProfile.id, name: userProfile.name, email: userProfile.email });
    } catch (err) {
      console.error(err);
      next(err);
    }
  };