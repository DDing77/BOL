import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createComment = async (userId, data) => {
  try {
    console.log(userId);
    console.log(data);
    return await prisma.comment.create({
      data: {
        content: data.content,
        commenter: {
          connect: {
            id: userId,
          },
        },
        game: {
          connect: {
            id: data.gameId,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getComments = async gameId => {
  try {
    return await prisma.comment.findMany({
      where: {
        gameId: parseInt(gameId),
      },
      include: {
        commenter: {
          select: {
            name: true,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async commentId => {
  try {
    return await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const editeComment = async (commentId, data) => {
  try {
    return await prisma.comment.update({
      where: { id: commentId },
      data: {
        content: data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
