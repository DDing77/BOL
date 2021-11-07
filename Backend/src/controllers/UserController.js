import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import * as UserService from '../services/UserService';

const router = express.Router();

router.post('/', AuthHander.isNotLoggined, UserService.SignUp);
router.get('/alluser', UserService.UserInfo);
export default router;