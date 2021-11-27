import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import ImageHandler from '../../middleware/ImageHandler';
import * as GameService from '../services/GameService';
const router = express.Router();

router.get('/');
router.post('/', ImageHandler,GameService.AddGame);

export default router;