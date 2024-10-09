import { orbitron } from "@/app/fonts";
import CourseCard from "./_components/CourseCard";
import { CourseProp } from "@/app/types";
import Premium from "./_components/Premium";
import ProgressChart from "./_components/ProgressChart";

const courses: CourseProp[] = [
	{
		courseID: "0dh2",
		title: "Course 1",
		coverPhotoUrl: "/Images/courseImage.png",
		type: "Basics",
		lessons: 3,
		duration: 30,
		progress: 87,
	},
	{
		courseID: "0de6",
		title: "Course 2",
		coverPhotoUrl: "/Images/courseImage.png",
		type: "Wallets",
		lessons: 4,
		duration: 40,
		progress: 32,
	},
	{
		courseID: "w37i",
		title: "Course 3",
		coverPhotoUrl: "/Images/courseImage.png",
		type: "Transactions",
		lessons: 5,
		duration: 40,
		progress: 20,
	},
];

const Dashboard = () => {
	return (
		<section className='w-full min-h-full p-10'>
			<h1 className={`${orbitron.className} font-semibold text-2xl mb-4`}>
				Active Courses
			</h1>

			<div className='flex justify-start items-center gap-4 p-2 mb-6'>
				{courses.map(
					(
						{
							courseID,
							lessons,
							title,
							type,
							duration,
							progress,
							coverPhotoUrl,
						},
						index
					) => (
						<CourseCard
							key={courseID || index}
							coverPhotoUrl={coverPhotoUrl}
							lessons={lessons}
							title={title}
							type={type}
							duration={duration}
							progress={progress}
						/>
					)
				)}
				<Premium />
			</div>

			<div className='flex justify-start items-center gap-4 p-2'>
				<ProgressChart progressPercentage={85} />
			</div>
		</section>
	);
};
export default Dashboard;
