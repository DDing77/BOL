import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import * as CommentService from '../services/CommentService';
const router = express.Router();

router.post('/',  CommentService.createComment);

export default router;
