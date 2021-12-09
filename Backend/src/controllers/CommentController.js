import express from 'express';
import * as AuthHander from '../../middleware/AuthHandler';
import * as CommentService from '../services/CommentService';
const router = express.Router();

router.post('/', AuthHander.isLoggined, CommentService.createComment);
router.get('/:gameid', CommentService.getComments);
router.post('/delete', AuthHander.isLoggined, CommentService.deleteComment);
router.post('/edite/:commentid', AuthHander.isLoggined, CommentService.editeComment);

export default router;
