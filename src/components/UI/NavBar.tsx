// import React, { ReactElement } from "react";
// import Link from "next/link";
// import NavLink from "./NavLink";
// import LoginButton from '../LoginButton'

// interface Navlink {
// 	id: number;
// 	title: string;
// 	route: string;
// 	icon?: ReactElement;
// }

// const navlinks: Navlink[] = [
// 	{ id: 1, title: "Home", route: "/" },
// 	{
// 		id: 2,
// 		title: "Courses",
// 		route: "/courses",
// 	},
// 	{
// 		id: 3,
// 		title: "about",
// 		route: "/about",
// 	},
// ];

// interface NavProps {
// 	isOpen: boolean;
// 	onclick?: React.MouseEventHandler<HTMLDivElement>;
// }

// function NavBar({ isOpen, onclick }: NavProps) {
// 	return (
// 		<div
// 			className={`${isOpen ? "translate-x-0" : "translate-x-full"} duration-300 transition-all md:hidden fixed top-0 right-0 w-full min-h-screen`}
// 			onScroll={onclick}>
// 			<div
// 				className='fixed min-w-full min-h-screen -z-50 top-0 left-0 bg-black/20 backdrop-blur-sm'
// 				onClick={onclick}></div>
// 			<nav
// 				role='navigation'
// 				className={`flex md:items-center md:justify-center flex-col absolute top-0 right-0 w-full max-w-[300px] h-screen pt-32 px-8 bg-white`}>
// 				<ul className='w-full mb-auto'>
// 					{navlinks.map((link) => (
// 						<NavLink
// 							key={link.id}
// 							className='w-full md:w-fit bg-blue-500 transition-colors hover:bg-blue-400 p-3 text-center rounded-md my-4 capitalize flex items-center justify-center text-white font-medium'
// 							to={link.route}>
// 							{link.icon && (
// 								<span className='mr-auto'>{link.icon}</span>
// 							)}
// 							<span>{link.title}</span>
// 						</NavLink>
// 					))}
// 				</ul>
// 				<div className='flex md:hidden items-center w-full gap-4 mb-4 flex-col'>
// 					<Link
// 						href='/register'
// 						className='w-full p-3 text-white rounded-lg bg-blue-500 text-center'>
// 						Register
// 					</Link>
// 					<Link
// 						href='/login'
// 						className='w-full p-3 text-white rounded-lg bg-blue-500 text-center'>
// 						Login
// 					</Link>
// 				</div>

// 				<div className='flex md:hidden items-center w-full gap-4 mb-4 flex-col'>
// 					<LoginButton/>
// 				</div>

// 			</nav>
// 		</div>
// 	);
// }

// export default NavBar;

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

interface NavItem {
	name: string;
	href: string;
}

const navItems: NavItem[] = [
	{ name: "About", href: "/about" },
	{ name: "Courses", href: "/courses" },
	{ name: "Competitions", href: "/competitions" },
	{ name: "Leadership Board", href: "/leadership-board" },
	{ name: "Contact Us", href: "/contact" },
];

const connectOptions: NavItem[] = [
	{ name: "Sign In", href: "/login" },
	{ name: "Sign Up", href: "/register" },
];

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isConnectOpen, setIsConnectOpen] = useState<boolean>(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const toggleConnect = () => setIsConnectOpen(!isConnectOpen);

	return (
		<nav className='bg-white shadow-md'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					{/* Desktop menu */}
					<div className='hidden sm:flex sm:items-center'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`px-3 py-2 text-sm font-medium ${
									pathname === item.href
										? "text-blue-600 border-b-2 border-blue-600"
										: "text-gray-500 hover:text-gray-900"
								}`}>
								{item.name}
							</Link>
						))}
						<div className='relative ml-3'>
							<button
								onClick={toggleConnect}
								className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center'>
								Connect <FaChevronDown className='ml-2' />
							</button>
							{isConnectOpen && (
								<div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
									<div className='py-1'>
										{connectOptions.map((option) => (
											<Link
												key={option.name}
												href={option.href}
												className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
												{option.name}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
