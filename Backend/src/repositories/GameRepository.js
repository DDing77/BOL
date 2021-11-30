import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const createGame = async (userId, data) => {
    try {
      console.log(userId)
      console.log(data)
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
          images: true
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  export const getOneGame = async (gameId) => {
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
          images: true
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  export const updateWin = async (image) => {
    try{
      return await prisma.post.update({
        where: {id:image},
        data:{
          win: win+1
        }
      })
    }
  }