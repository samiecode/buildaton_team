"use client";

import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavBar from "./NavBar";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	return (
		<header className='h-[68px] shadow-md w-full'>
			<div className='flex p-4 items-center md:w-4/5 mx-auto relative'>
				<div className='mr-autp'>
					<Logo />
				</div>

				<NavBar
				// isOpen={isNavOpen}
				// onclick={() => setIsNavOpen(false)}
				/>

				<nav
					role='navigation'
					className='hidden md:flex items-center gap-4'></nav>

				<div className='md:hidden'>
					<button
						onClick={() => setIsNavOpen((prev) => !prev)}
						className='md:hidden absolute z-50 w-10 h-10 top-1/2 right-4 md:right-8 transform -translate-y-1/2 flex items-center justify-center font-medium rounded-lg border border-gray-300 focus-within:ring-2 focus-within:border-none'>
						{isNavOpen ? (
							<FaTimes className='text-3xl text-gray-500 md:hidden' />
						) : (
							<FaBars className='text-3xl text-gray-500 md:hidden' />
						)}
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
