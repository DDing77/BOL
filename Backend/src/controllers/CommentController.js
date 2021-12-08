import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import * as CommentService from '../services/CommentService';
const router = express.Router();

router.post('/',  CommentService.createComment);
router.get('/:gameid', CommentService.getComments);
router.post('/delete', CommentService.deleteComment);
router.post('/edite/:commentid', CommentService.editeComment);

export default router;
