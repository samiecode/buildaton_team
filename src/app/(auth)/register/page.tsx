"use client";

import React, { ReactEventHandler, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import clsx from "clsx";

interface SignUpDetails {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}

function SignUp() {
	const [firstname, setFirstname] = useState<string>("");
	const [lastname, setLastname] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!firstname) {
			alert("Please enter your  firstname");
			return;
		}

		if (!lastname) {
			alert("Please enter your lastname");
			return;
		}

		if (!email) {
			alert("Please enter your email");
			return;
		}

		if (!password) {
			alert("Please enter your password");
			return;
		}

		if (password.length < 8) {
			alert("Password must be up to 8 characters");
			return;
		}

		if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
			alert("passwords do not match");
			return;
		}

		const newUserData: SignUpDetails = {
			firstname,
			lastname,
			email,
			password,
		};

		console.log(newUserData);

		// try {
		// 	setIsLoading(true);
		// 	const response = await fetch("https://api.test/login", {
		// 		method: "POST",
		// 		body: JSON.stringify(userLoginData),
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 	});

		// 	if (!response.ok) throw new Error("couldn't complete request");
		// } catch (error: any) {
		// 	console.error(error.message);
		// } finally {
		// 	setIsLoading(false);
		// }
	}

	//  'bg-white md:w-[860px] mx-auto flex items-center shadow-lg md:h-[520px] max-h-[640px] rounded-2xl overflow-hidden

	return (
		<div className='grid place-items-center w-full min-h-screen bg-gray-100'>
			<div className='bg-white md:w-[860px] mx-auto flex items-center shadow-lg md:h-[650px] md:max-h-[680px] rounded-xl overflow-hidden'>
				<div className='md:w-1/2 min-w-[320px] py-8 px-6'>
					<h1 className='text-3xl font-bold mb-6'>
						Create an Account
					</h1>

					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<label
								htmlFor='firstname'
								className='block mb-2'>
								Firstname
							</label>
							<input
								type='text'
								id='firstname'
								value={firstname}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setFirstname(e.target.value)}
								placeholder='John'
								className='w-full p-3 border rounded outline-blue-600'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='lastname'
								className='block mb-2'>
								Lastname
							</label>
							<input
								type='text'
								id='lastname'
								value={lastname}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setLastname(e.target.value)}
								placeholder='Doe'
								autoCapitalize='on'
								className='w-full p-3 border rounded outline-blue-600'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block mb-2'>
								Email
							</label>
							<input
								type='email'
								id='email'
								value={email}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.target.value)}
								placeholder='blockchainexample@gmail.com'
								className='w-full p-3 border rounded outline-blue-600'
							/>
						</div>

						<div className='mb-4'>
							<label
								htmlFor='password'
								className='block mb-2'>
								Password
							</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setPassword(e.target.value)}
								placeholder='At least 8 characters'
								className='w-full p-3 border rounded outline-blue-600'
							/>
						</div>
						<div className='mb-4'>
							<label
								htmlFor='password'
								className='block mb-2'>
								Confirm Password
							</label>
							<input
								type='password'
								id='password'
								value={confirmPassword}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setConfirmPassword(e.target.value)}
								placeholder='At least 8 characters'
								className={clsx(
									"w-full p-3 border rounded",
									password === confirmPassword
										? "outline-blue-600"
										: "outline-red-600"
								)}
							/>
							<p
								className={clsx(
									"text-red-600 text-sm mt-2",
									password === confirmPassword
										? "hidden"
										: "focus:inline-block"
								)}>
								Passwords must match
							</p>
						</div>
						<div className='text-right mb-4'>
							<Link
								href='/forgot-password'
								className='text-blue-600'>
								Forgot Password?
							</Link>
						</div>

						<button
							type='submit'
							className='w-full bg-blue-600 text-white p-3 rounded mb-4'>
							Sign in
						</button>
					</form>

					<div className='text-center mb-4'>or</div>

					<button className='w-full bg-white border p-3 rounded mb-4 flex items-center justify-center'>
						<FcGoogle className='mr-2' />
						Sign in with Google
					</button>
					<div className='text-center'>
						Already a member?
						<Link
							href='/login'
							className='text-blue-600 ml-2'>
							Sign In
						</Link>
					</div>
				</div>

				<div className='hidden md:flex md:w-1/2 items-center justify-center bg-[url("/Images/excited_learner.jpg")] bg-cover bg-no-repeat h-full bg-center'>
					<div className='bg-black/30 hover:bg-black/60 hover:backdrop-blur-sm backdrop-blur-0 transition-all duration-200 min-w-full min-h-full'></div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
