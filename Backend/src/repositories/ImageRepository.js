import { PrismaClient } from '@prisma/client';
import path from 'path';
const prisma = new PrismaClient();

export const createImage = async (gameId, data) => {
  try {
    return await prisma.image.create({
      data: {
        name: path.basename(data.originalname, path.extname(data.originalname)),
        path: data.path,
        game: {
          connect: {
            id: gameId,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteImage = async imageId => {
  try {
    return await prisma.image.delete({
      where: {
        id : imageId,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
