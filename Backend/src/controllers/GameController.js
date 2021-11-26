import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import * as GameService from '../services/GameService';
const router = express.Router();

router.get('/');
router.post('/', GameService.AddGame);

export default router;