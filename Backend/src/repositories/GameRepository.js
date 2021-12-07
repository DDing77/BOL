import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createGame = async (userId, data) => {
  try {
    console.log(userId);
    console.log(data);
    return await prisma.game.create({
      data: {
        title: data.title,
        description: data.description,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteGame = async (gameId) => {
  try{
    return await prisma.$queryRaw`DELETE FROM games WHERE id = ${gameId};`
  } catch (err) {
    console.error(err);
  }
};

// export const updateGame = async (gameid, data) => {
//   try {
//     return await prisma.game.update({
//       where: { id: gameid },
//       data: {
//         title: data.title,
//         description: data.content,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

export const getAllGames = async () => {
  try {
    return await prisma.game.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
        images: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getUserGames = async userId => {
  try {
    return await prisma.game.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        images: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getOneGame = async gameId => {
  try {
    return await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        images: true,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateWin = async image => {
  try {
    return await prisma.image.update({
      where: { id: image },
      data: {
        win: {
          increment: 1,
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateChampion = async image => {
  try {
    return await prisma.image.updateMany({
      where: { id: image },
      data: {
        win: {
          increment: 1,
        },
        champion: {
          increment: 1,
        }
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const editGame = async (gameId,data) => {
  try{
    return await prisma.game.updateMany({
      where: { id: gameId},
      data: {
        title: data.title,
        description: data.description,
      }
    })
  } catch(err) {
    console.error(err);
  }
}