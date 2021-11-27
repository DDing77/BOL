import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createImage = async (gameId, data) => {
  try {
    return await prisma.image.create({
      data: {
        name: data.originalname,
        path: data.path,
        game: {
          connect: {
            id: gameId,
          },
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};