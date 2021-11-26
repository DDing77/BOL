import * as GetGameRepository from '../repositories/GetGameRepository';

export const getAllGames = async (req, res, next) => {
    try {
      const games = await GetGameRepository.getAllGames();
      return res.status(200).send(games);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };