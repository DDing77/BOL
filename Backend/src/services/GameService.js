import fs from 'fs';
import *as GameRepository from '../repositories/GameRepository';

export const AddGame = async (req, res, next) => {
  try {
    console.log(req.session.passport);
    console.log(req.body)
    const currentUser = req.session.passport.user;
    const game = await GameRepository.createGame(currentUser.id, req.body);
    //게임 업로드 오류발생시.
    console.log(game)
    if (!game) {
      return res.send('게임 생성 도중 오류가 발생하였습니다.');
    } else {
      return res.status(200).send(game);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
