import * as CommentRepository from '../repositories/CommentRepository';

export const createComment = async (req, res, next) => {
  try {
    console.log(req.session.passport);
    console.log(req.body);
    const currentUser = req.session.passport.user.id;
    const comment = await CommentRepository.createComment(currentUser, req.body);

    if (!comment) {
      return res.send('댓글 생성 도중 오류가 발생하였습니다.');
    }
    console.log(comment);
    return res.status(200).send(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    console.log(req.params);
    const comments = await CommentRepository.getComments(parseInt(req.params.gameid));
    if (!comments) {
      return res.send('댓글 불러오기 실패.');
    }
    return res.status(200).send(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = CommentRepository.deleteComment(parseInt(req.body.commentId));
    console.log(result);
    if (!result) {
      return res.send('댓글 삭제도중 오류 발생.');
    }
    return res.status(200).send('댓글 삭제 완료');
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const editeComment = async (req, res, next) => {
  try {
    console.log(req.body)
    console.log(req.body.content);
    console.log(req.params);
    const editedComment = CommentRepository.editeComment(parseInt(req.params.commentid), req.body.content);
    if (!editedComment) {
      return res.send('댓글 수정 도중 오류 발생.');
    }
    console.log(editedComment);
    return res.status(200).send('댓글 수정 완료');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
