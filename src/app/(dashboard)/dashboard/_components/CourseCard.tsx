import Image from "next/image";
import { CourseProp } from "../../../types";
import { getByTitle } from "@testing-library/react";

const CourseCard: React.FC<CourseProp> = ({
	title,
	type,
	lessons,
	duration,
	progress,
	coverPhotoUrl,
}) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-5 w-[18vw] flex flex-col gap-2'>
			<div className='my-2 flex flex-row items-center gap-3'>
				<div className='rounded-full bg-gray-100 w-[60px] h-[60px] grid items-center overflow-hidden shadow-sm'>
					{coverPhotoUrl && (
						<Image
							src={coverPhotoUrl}
							alt={title}
							width={100}
							height={100}
							className='object-cover w-full h-full'
						/>
					)}
				</div>

				<span>
					<h2 className='text-xl'>{title}</h2>
					<p className='text-sm text-gray-400'>{lessons} lessons</p>
				</span>
			</div>
			<div className='my-4 flex-row flex gap-3 justify-between items-center'>
				<span>
					<p className='text-sm text-gray-400'>Duration:</p>
					<div className='font-semibold text-sm'>
						{duration} minutes
					</div>
				</span>
				<span>
					<p className='text-sm text-gray-400'>Progress:</p>
					<div className='font-semibold text-sm'>{progress}%</div>
				</span>
				<span>
					<p className='text-sm text-gray-400'>Category:</p>
					<div className='font-semibold text-sm'>{type}</div>
				</span>
			</div>
		</div>
	);
};
export default CourseCard;
