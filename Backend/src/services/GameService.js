import fs from 'fs';
import * as GameRepository from '../repositories/GameRepository';
import * as ImageRepository from '../repositories/ImageRepository';

export const AddGame = async (req, res, next) => {
  try {
    console.log(req.session.passport);
    console.log(req.body);
    console.log(req.files);
    const currentUser = req.session.passport.user;
    const game = await GameRepository.createGame(currentUser.id, req.body);

    //게임 업로드 오류발생시.
    console.log(game);
    if (!game) {
      return res.send('게임 생성 도중 오류가 발생하였습니다.');
    }

    let images;
    images =  req.files.map( async element => {
      console.log('매핑시작');
      console.log(element);
      await ImageRepository.createImage(game.id, element);
    });
    
    return res.status(200).send(images);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 모든 게임 정보 요청
export const getAllGames = async (req, res, next) => {
  try {
    const games = await GameRepository.getAllGames();
    return res.status(200).send(games);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 특정 게임 정보 요청
export const getOneGame = async (req, res, next) => {
  try {
    console.log(req.params);
    const gameId = parseInt(req.params.gameid);
    const game = await GameRepository.getOneGame(gameId);
    return res.status(200).send(game);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 승리 요청 
export const editWin = async (req,res,next) => {
  try{
    const image = req.body.imageId;
    const editedWin = await GameRepository.updateWin(parseInt(image));
    if(!editedWin) {
      res.send("승리횟수 증가 시도 오류.");
    } else {
      res.status(200).send("승리횟수 증가 성공");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
// 우승, 승리 요청 
export const editChampion = async (req,res,next) => {
  try{
    const image = req.body.imageId;
    const editedChampion = await GameRepository.updateChampion(parseInt(image));
    if(!editedChampion) {
      res.send("우승, 승리횟수 증가 시도 오류.");
    } else {
      res.status(200).send("우승, 승리횟수 증가 성공");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};