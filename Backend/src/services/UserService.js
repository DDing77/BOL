import bcrypt from 'bcrypt';
import passport from 'passport';
import * as UserRepository from '../repositories/UserRepository';

export const SignUp = async (req, res, next) => {
    const user = req.body;
    try{
        if(!user) {
            return res.send('Erroradsfas.');
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
  