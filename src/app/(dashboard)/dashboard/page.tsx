import { orbitron } from "@/app/fonts";
import CourseCard from "./_components/CourseCard";
import { CourseProp, ProductivityData } from "@/app/types";
import Premium from "./_components/Premium";
import ProductivityChart from "./_components/ProductivityChart";
import ProgressBarRounded from "./_components/ProgressBarRounded";
import Calendar from "./_components/Calendar";
import NotificationsTab from "./_components/NotificationsTab";
import CompetitionsTab from "./_components/CompetitionsTab";

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

const productivityData: ProductivityData[] = [
	{ day: "Sun", hours: 2.5 },
	{ day: "Mon", hours: 3 },
	{ day: "Tue", hours: 4 },
	{ day: "Wed", hours: 4 },
	{ day: "Thu", hours: 3.5 },
	{ day: "Fri", hours: 2.8 },
	{ day: "Sat", hours: 3.8 },
];

const { year, month } = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
};

const Dashboard = () => {
	return (
		<section className='w-full min-h-full p-10'>
			<h1 className={`${orbitron.className} font-semibold text-2xl mb-4`}>
				Active Courses
			</h1>

			<div className='flex justify-start items-center gap-4 p-2 mb-10'>
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

			<div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-1 gap-12 mb-10 p-2 h-[270px]'>
				<ProductivityChart data={productivityData} />
				<ProgressBarRounded percentage={Math.round(46.333)} />
				<Calendar
					year={year}
					month={month}
				/>
			</div>

			<section className='grid grid-cols-[450px_1fr] gap-12 mb-10 p-2 h-[450px]'>
				<NotificationsTab />
				<CompetitionsTab />
			</section>
		</section>
	);
};
export default Dashboard;
