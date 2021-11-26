import express from 'express';
import * as GetGameService from '../services/GetGameService';
const router = express.Router();

router.get('/', GetGameService.getAllGames);
export default router;