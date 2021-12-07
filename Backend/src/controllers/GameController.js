import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import ImageHandler from '../../middleware/ImageHandler';
import * as GameService from '../services/GameService';
const router = express.Router();

router.post('/', ImageHandler,GameService.AddGame);
router.get('/allgames', GameService.getAllGames);
router.get('/getgame/:gameid', GameService.getOneGame);
router.get('/getgames/:userid',GameService.getUserGames);
router.post('/win',GameService.editWin);
router.post('/champion',GameService.editChampion);

export default router;