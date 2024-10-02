import Link from "next/link";
import Image from "next/image";

function Logo() {
	return (
		<Link
			href='/'
			className='flex items-center gap-3 p-2'>
			<Image
				width={50}
				height={50}
				src='/Images/Logo.png'
				alt='Logo Image'
			/>

			<h1 className='text-4xl text-white font-extrabold uppercase'>
				Lumina
			</h1>
		</Link>
	);
}

export default Logo;
