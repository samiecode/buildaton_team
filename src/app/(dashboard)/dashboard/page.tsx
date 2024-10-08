import { orbitron } from "@/app/fonts";
import CourseCard from "./_components/CourseCard";
import { CourseProp } from "@/app/types";
import Premium from "./_components/Premium";

const courses: CourseProp[] = [
	{
		courseID: "0dh2",
		name: "Course 1",
		type: "Basics",
		lessons: 3,
		duration: 30,
		progress: 87,
	},
	{
		courseID: "0de6",
		name: "Course 2",
		type: "Wallets",
		lessons: 4,
		duration: 40,
		progress: 32,
	},
	{
		courseID: "w37i",
		name: "Course 3",
		type: "Transactions",
		lessons: 5,
		duration: 40,
		progress: 20,
	},
];
const Dashboard = () => {
	return (
		<div className='w-full min-h-full p-10'>
			<h1 className={`${orbitron.className} font-semibold text-2xl`}>
				Active Courses
			</h1>
			<div className='flex justify-start items-center gap-4'>
				{courses.map((course, index) => (
					<CourseCard
						key={course.courseID || index}
						lessons={course.lessons}
						name={course.name}
						type={course.type}
						duration={course.duration}
						progress={course.progress}
					/>
				))}
				<Premium />
			</div>
		</div>
	);
};
export default Dashboard;
