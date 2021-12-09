import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import ImageHandler from '../../middleware/ImageHandler';
import * as GameService from '../services/GameService';
const router = express.Router();

router.post('/', AuthHander.isLoggined, ImageHandler, GameService.AddGame);
router.get('/allgames', GameService.getAllGames);
router.get('/getgame/:gameid', GameService.getOneGame);
router.get('/getgames/:userid', AuthHander.isLoggined, GameService.getUserGames);
router.post('/win',AuthHander.isLoggined, GameService.editWin);
router.post('/champion', AuthHander.isLoggined,GameService.editChampion);
router.post('/edit', AuthHander.isLoggined,GameService.editGame);
router.post('/delete',AuthHander.isLoggined, GameService.deleteGame);

export default router;
