import Link from "next/link";
import Image from "next/image";
import InteractiveBulbIcon from "./InteractiveBulbIcon";

function Logo() {
	return (
		<Link
			href='/'
			className='flex items-center p-2 max-h-full'>
			<div className='max-h-1/2 -mt-6 overflow-hidden flex items-center justify-center'>
				<InteractiveBulbIcon
					illuminationPercentage={30}
					width={70}
					height={70}
				/>
			</div>

			<h1 className='text-4xl text-white font-extrabold uppercase'>
				Lumina
			</h1>
		</Link>
	);
}

export default Logo;
