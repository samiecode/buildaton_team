import {prisma} from "@/lib/prisma";
import {z} from "zod";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const result = schema.safeParse(data);

		if (!result.success) {
			const {errors} = result.error;

			return Response.json(
				{error: {message: "Invalid request", errors}},
				{status: 400}
			);
		}

		const {email, password} = result.data;
		const user = await prisma.user.findFirstOrThrow({
			where: {
				email: email,
				password: password,
			},
		});

		return Response.json({
			message: "Successfully login!",
			data: user,
		});
	} catch (error) {
		return Response.json({
			error: error,
		},{status: 500});
	}
}
