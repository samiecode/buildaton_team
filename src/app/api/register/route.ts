import {prisma} from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

const schema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
});

export async function POST(req: Request) {
	const data = await req.json();

	const result = schema.safeParse(data);

	if (!result.success) {
		const {errors} = result.error;

		return Response.json(
			{error: {message: "Invalid request", errors}},
			{status: 400}
		);
	}

	const {email, name, password} = result.data;

	try {
		const user = await prisma.user.create({
			data: {
				email: email,
                name: name,
                password: password
			},
		});

		return Response.json({message: "Register successfully!", data: user});
	} catch (err: Error | any) {
		return Response.json({error: err}, {status: 500});
	}
}
