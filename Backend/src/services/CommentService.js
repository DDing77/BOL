import * as CommentRepository from '../repositories/CommentRepository';

export const createComment = async (req, res, next) => {
    try{
        // console.log(req.session.passport);
        console.log(req.body);
        // const currentUser = req.session.passport.user;
        const comment = await CommentRepository.createComment(1,req.body);

        if(!comment) {
            return res.send('댓글 생성 도중 오류가 발생하였습니다.');
        }
        return res.status(200).send(comment);
    } catch (err) {
        console.error(err);
        next(err);
    }
};