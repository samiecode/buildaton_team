import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import SignupButton from "../SignupButton";
import WalletWrapper from "../WalletWrapper";
import LoginButton from "../LoginButton";
import {useAccount} from "wagmi";

interface NavItem {
	title: string;
	route: string;
	icon?: ReactNode;
}

export const navItems: NavItem[] = [
	{ title: "About", route: "/about", icon: <FaQuestion /> },
	{ title: "Courses", route: "/courses" },
	{ title: "Contact", route: "/contact" },
];

const Navigation: React.FC = () => {
	const pathname = usePathname();
    const {isConnected} = useAccount();

	return (
		<nav className='hidden md:block pr-8'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between'>
					{/* Desktop menu */}
					<div className='flex items-center'>
						<div className='mr-8'>
							{navItems.map((item) => (
								<Link
									key={item.title}
									href={item.route}
									className={`px-3 py-2 text-md font-medium ${
										pathname === item.route
											? "text-blue-600 border-b-2 border-blue-600"
											: "text-gray-500 hover:text-gray-900"
									}`}>
									{item.title}
								</Link>
							))}
						</div>
						<div className='relative ml-3 flex gap-2'>
							{/* <Link
								href='/login'
								className='bg-gray-400 py-2 px-4 rounded-lg text-white'>
								Login
							</Link> */}
                            <WalletWrapper text="Get Started" withWalletAggregator={true}/>{isConnected ? 'Connected': 'Not Connected'}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
