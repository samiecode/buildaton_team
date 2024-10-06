"use client";

import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavBar from "./NavBar";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileNav from "./MobileNav";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const toggleMenu = (value: boolean) => setIsMenuOpen(value || false);

	return (
		<header className='w-full sticky top-0 md:pt-4'>
			<div className='flex items-center relative shadow-md backdrop-blur-lg md:rounded-full md:w-5/6 mx-auto pr-6 md:px-0'>
				<div className='mr-auto text-black'>
					<Logo />
				</div>

				<NavBar />
				<MobileNav
					toggleMenu={() => toggleMenu(false)}
					isMenuOpen={isMenuOpen}
				/>

				<nav
					role='navigation'
					className='hidden md:flex items-center gap-4'></nav>

				<div className='md:hidden'>
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className='md:hidden absolute z-50 w-10 h-10 top-1/2 right-4 md:right-8 transform -translate-y-1/2 flex items-center justify-center font-medium rounded-lg border border-gray-300 focus-within:ring-2 focus-within:border-none'>
						{isMenuOpen ? (
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
