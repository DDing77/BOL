import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createImage = async (gameId, data) => {
  try {
    return await prisma.image.create({
      data: {
        game: {
          connect: {
            id: gameId,
          },
        },
        path: "/test",
        name: "test"
      },
    });
  } catch (err) {
    console.error(err);
  }
};