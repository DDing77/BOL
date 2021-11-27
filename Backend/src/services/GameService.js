import fs from 'fs';
import *as GameRepository from '../repositories/GameRepository';
import * as ImageRepository from '../repositories/ImageRepository';

export const AddGame = async (req, res, next) => {
  try {
    console.log(req.session.passport);
    console.log(req.body)
    console.log(req.files)
    const currentUser = req.session.passport.user;
    const game = await GameRepository.createGame(currentUser.id, req.body);
    //게임 업로드 오류발생시.
    console.log(game)
    if (!game) {
      return res.send('게임 생성 도중 오류가 발생하였습니다.');
    } 

    if(!req.files){
      return res.status(200).send(game);
    } else{
      images = await req.files.map(element => {
        console.log("매핑시작");
        console.log(element);
        ImageRepository.createImage(game.id, element);
      });
    }

  } catch (err) {
    console.error(err);
    next(err);
  }
};
