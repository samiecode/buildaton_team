"use client";

import React, {ReactEventHandler, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {signIn} from "next-auth/react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
} from "@/components/UI/form";
import {Input} from "@/components/UI/input";

interface LoginDetails {
	email: string;
	password: string;
}

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

function Login() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await signIn("credentials", {
				redirect: true,
				...values,
				redirectTo: "/dashboard",
			});
		} catch (err) {
			console.error(err);
		}
	};

	// async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
	// 	e.preventDefault();

	// 	if (!email) {
	// 		alert("Please enter your registered email");
	// 		return;
	// 	}

	// 	if (!password) {
	// 		alert("Please enter your password");
	// 		return;
	// 	}

	// 	if (password.length < 8) {
	// 		alert("Password must be up to 8 characters");
	// 		return;
	// 	}

	// 	const userLoginData: LoginDetails = {
	// 		email,
	// 		password,
	// 	};

	// 	console.log(userLoginData);

	// 	try {
	// 		setIsLoading(true);
	// 		const response = await fetch("/api/login", {
	// 			method: "POST",
	// 			body: JSON.stringify(userLoginData),
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 		});

	// 		if (!response.ok) throw new Error("couldn't complete request");

	// 	} catch (error: any) {
	// 		console.error(error.message);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// }

	// the great one has already shown you his future, but the one who isn't, you can't tell how far he can go

	return (
		<div className="grid place-items-center w-full min-h-screen bg-gray-100">
			<div className="bg-white md:w-[860px] mx-auto flex items-center shadow-lg md:h-[520px] max-h-[640px] rounded-2xl overflow-hidden">
				<div className='hidden md:flex w-1/2 items-center justify-center bg-[url("/Images/excited_learner.jpg")] bg-cover bg-no-repeat min-h-full'>
					<div className="bg-black/30 hover:bg-black/60 hover:backdrop-blur-sm backdrop-blur-0 transition-all duration-200 min-w-full min-h-full border-red-800"></div>
				</div>

				<div className="md:w-1/2 py-8 px-6 h-full overflow-y-auto">
					<h1 className="text-3xl font-bold mb-6 flex items-end gap-2">
						<span>Welcome Back!</span>
						<Image
							width={20}
							height={20}
							src="/waving_hand.png"
							alt="waving hand"
							unoptimized
							className="w-12 object-cover"
						/>
					</h1>
					<p className="mb-6">
						Take your knowledge on blockchain to a whole new level.
						Sign in and Get started with your learning experience.
					</p>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="email"
								render={({field}) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="blockchainexample@gmail.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({field}) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder="*******"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="text-right mb-4">
								<Link
									href="/forgot-password"
									className="text-blue-600"
								>
									Forgot Password?
								</Link>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white p-3 rounded mb-4"
							>
								{form.formState.isSubmitting
									? "Loading..."
									: "Login"}
							</button>
						</form>
					</Form>

					{/* <form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="email" className="block mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.target.value)}
								placeholder="blockchainexample@gmail.com"
								className="w-full p-3 outline-blue-600 border rounded"
							/>
						</div>

						<div className="mb-4">
							<label htmlFor="password" className="block mb-2">
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setPassword(e.target.value)}
								placeholder="At least 8 characters"
								className="w-full p-3 outline-blue-600 border rounded"
							/>
						</div>

						<div className="text-right mb-4">
							<Link
								href="/forgot-password"
								className="text-blue-600"
							>
								Forgot Password?
							</Link>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-600 text-white p-3 rounded mb-4"
						>
							Sign in
						</button>
					</form> */}
					<div className="text-center mb-4">or</div>

					<button className="w-full bg-white border p-3 rounded mb-4 flex items-center justify-center">
						<FcGoogle className="mr-2" />
						Sign in with Google
					</button>

					<div className="text-center">
						Don't have an account?
						<Link href="/register" className="text-blue-600 ml-2">
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
