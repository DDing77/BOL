import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
