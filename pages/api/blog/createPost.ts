import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async (hmm: string) => {
	await prisma.post.create({
		data: {
			content: '',
			title: '',
			views: 100,
		},
	});
};
