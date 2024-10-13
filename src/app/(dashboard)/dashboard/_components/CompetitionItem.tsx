import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface CompetitionItemProps {
	title: string;
	description: string;
}

const CompetitionItem: React.FC<CompetitionItemProps> = ({
	title,
	description,
}) => {
	const linkPath = title
		.split(" ")
		.map((str) => str.toLocaleLowerCase())
		.join("-");

	return (
		<Link
			href={`/dashboard/competitions/${linkPath}`}
			className='py-3 border-b last:border-b-0 flex justify-between items-center hover:bg-blue-50 rounded-md px-2 my-1 transition-colors duration-300'>
			<div>
				<h3 className='font-semibold'>{title}</h3>
				<p className='text-sm text-gray-600'>{description}</p>
			</div>
			<div className='focus-within:ring-2 flex items-center justify-center rounded-md p-1'>
				<button className='font-light text-xl outline-none border-none'>
					<FaChevronRight />
				</button>
			</div>
		</Link>
	);
};

export default CompetitionItem;
