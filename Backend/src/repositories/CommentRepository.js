import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createComment = async (userId,data) => {
    try{
        console.log(userId);
        console.log(data);
        return await prisma.comment.create({
            data: {
                content: data.content,
                commenter: {
                    connect: {
                        id: userId
                    }
                },
                game: {
                    connect: {
                        id: data.gameId
                    },
                },
            },
        });
    } catch (err) {
        console.error(err);
    }
};