import { orbitron } from "src/app/fonts";
import { FaCog } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/components/UI/Logo";
import { RiQuestionnaireFill } from "react-icons/ri";

const Header = () => {
	return (
		<header
			role='banner'
			className='flex items-center w-full p-3 h-24 border-b border-gray-100 bg-white/30 shadow-sm sticky top-0 left-0 z-50 backdrop-blur-md'>
			<div className='mr-auto'>
				<Logo />
			</div>

			<div className='w-40 mr-auto flex items-center gap-2 focus-within:ring-2 border border-black/30 rounded-full px-2 py-2 bg-transparent focus-within:w-96 transition-all duration-300'>
				<IoSearchOutline className='text-2xl cursor-pointer' />
				<input
					type='search'
					className='bg-transparent w-full h-full outline-none'
					placeholder='Search'
				/>
			</div>

			<div className='flex gap-4 mr-8 items-center'>
				<button className='flex items-end justify-center text-gray-500 text-2xl'>
					<RiQuestionnaireFill title='FAQ' />
				</button>

				<button className='flex items-center justify-center text-gray-700 focus:ring p-1 rounded-md text-2xl hover:text-[#000D7E] transition-colors duration-200'>
					<FaBell title='Notifications' />
				</button>
			</div>

			<button className='flex items-center gap-3 mr-8 bg-gray-100 px-4 py-2 rounded-lg shadow-md'>
				<div className='rounded-full w-12 h-12 flex items-center justify-center border border-[#000D7E] overflow-hidden'>
					<Image
						src='/Images/jesse.jpg'
						alt='user'
						width={50}
						height={50}
						className='object-cover'
					/>
				</div>
				<div className='flex items-center'>
					<h2 className='font-semibold text-lg'>Jesse Polak</h2>
				</div>
			</button>
		</header>
	);
};
export default Header;
