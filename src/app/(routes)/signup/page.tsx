import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { orbitron } from "src/app/fonts";
import {InputProps} from "src/app/types";
import { placeholder } from "@coinbase/onchainkit/theme";

const SignUpUI = () => {
	return (
    <div className='flex min-h-screen bg-gray-100 p-4 border-2'>
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
					<h1 className={`text-3xl font-bold mb-6 ${orbitron.className}`}>Create an Account</h1>
          <form>
          <div className='mb-4'>
							<label
								htmlFor='lastname'
								className='block mb-2'>
								Last Name
							</label>
							<input
								type='text'
								id='lastname'
								placeholder='Amade'
								className='w-full p-3 border rounded outline-blue-700'
							/>
						</div>
            <div className='mb-4'>
							<label
								htmlFor='firstname'
								className='block mb-2'>
								First Name
							</label>
							<input
								type='text'
								id='firstname'
								placeholder='Godswill'
								className='w-full p-3 border rounded outline-blue-700'
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
								placeholder='blockchainexample@gmail.com'
								className='w-full p-3 border rounded outline-blue-700'
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
								className='w-full p-3 border rounded outline-blue-700'
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
								placeholder='At least 8 characters'
								className='w-full p-3 border rounded outline-blue-700 '
							/>
						</div>
{/*
						<div className='text-right mb-4'>
							<Link
								href='/forgot-password'
								className='text-blue-600'>
								Forgot Password?
							</Link>
						</div> */}

						<button
							type='submit'
							className='w-full bg-blue-600 text-white p-3 rounded mb-4'>
							Sign Up
						</button>
					</form>

					<div className='text-center mb-4'>or</div>

					<button className='w-full bg-white border p-3 rounded mb-4 flex items-center justify-center'>
						<FcGoogle className='mr-2' />
						Sign Up with Google
					</button>

					<button className='w-full bg-blue-800 text-white p-3 rounded mb-4 flex items-center justify-center'>
						<FaFacebook className='mr-2' />
						Sign Up with Facebook
					</button>

					{/* <div className='text-center'>
						Don't have an account?{" "}
						<Link
							href='/signup'
							className='text-blue-600'>
							Sign up
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};

// const InputElement:FC<InputProps> = ({label, placeholder, id,type}) => {
//   return <div className='mb-4'>
// 							<label
// 								htmlFor={id}
// 								className='block mb-2'>
// 								{label}
// 							</label>
// 							<input
// 								type={type}
// 								id={id}
// 								placeholder={placeholder}
// 								className='w-full p-3 border rounded outline-blue-700 outline-blue-700'
// 							/>
// 						</div>
// }
export default SignUpUI;
