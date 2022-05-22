import { Category, PrismaClient } from "@prisma/client";
import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse<Category[]>) => {
	const categories = await prisma.category.findMany();
	res.status(200).json(categories);
};

export default withSentry(handler);
