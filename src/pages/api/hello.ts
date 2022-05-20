import type { NextApiRequest, NextApiResponse } from "next";
import { withSentry } from "@sentry/nextjs";

type Data = { name: string };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ name: "John Doe" });
};

export default withSentry(handler);
