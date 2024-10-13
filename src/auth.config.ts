import type {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {randomBytes, randomUUID} from "crypto";
import {prisma} from "./lib/prisma";

export const authConfig = {
	session: {
		strategy: "jwt",
		maxAge: 24 * 60 * 60,
		updateAge: 60 * 60,
		generateSessionToken: () => {
			return randomUUID?.() ?? randomBytes(32).toString("hex");
		},
	},
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				// find user
				const user : any = await prisma.user.findFirst({
					where: {
						email: credentials.email as string,
						password: credentials.password as string,
					},
                })

				if (!user) {
					throw new Error("User not found.");
				}

				// return user object with the their profile data
				return user;
			},
		}),
	],
	callbacks: {
		authorized({auth, request: {nextUrl}}) {
			const isLoggedIn = !!auth?.user;

			if (isLoggedIn) return true;
		},
		jwt({token, user, trigger, session}) {
			return {...token, ...user};
		},
		session({session, token, user}) {
			return {
				...session,
				user: {
					...session.user,
					...token,
				},
			};
		},
	},
	pages: {
		signIn: "/login",
	},
} satisfies NextAuthConfig;
