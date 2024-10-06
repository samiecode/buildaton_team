import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginUI = () => {
	return (
		<div className='flex  bg-gray-100 p-4'>
			<div className='md:block md:w-1/2 relative rounded-[30px] overflow-hidden'>
				<Image
					src='/Images/login-img.png'
          alt='Excited learner'
          objectFit="cover"
          fill
          quality={100}
          sizes="(max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
			<div className='md:w-1/2 flex items-center justify-center p-8'>
				<div className='w-full max-w-md'>
					<h1 className='text-3xl font-bold mb-6'>Welcome Back!</h1>
					<p className='mb-6'>
						Take your knowledge on blockchain to a whole new level.
						Sign in and Get started with your learning experience.
					</p>

					<form>
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block mb-2'>
								Email
							</label>
							<input
								type='email'
								id='email'
								placeholder='blockchainexample@gmail.com'
								className='w-full p-2 border rounded outline-blue-700'
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
								placeholder='At least 8 characters'
								className='w-full p-2 border rounded outline-blue-700'
							/>
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
							className='w-full bg-blue-600 text-white p-2 rounded mb-4'>
							Sign in
						</button>
					</form>

					<div className='text-center mb-4'>or</div>

					<button className='w-full bg-white border p-2 rounded mb-4 flex items-center justify-center'>
						<FcGoogle className='mr-2' />
						Sign in with Google
					</button>

					<button className='w-full bg-blue-800 text-white p-2 rounded mb-4 flex items-center justify-center'>
						<FaFacebook className='mr-2' />
						Sign in with Facebook
					</button>

					<div className='text-center'>
						Don't have an account?{" "}
						<Link
							href='/signup'
							className='text-blue-600'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginUI;
