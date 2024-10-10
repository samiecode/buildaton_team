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
    title: "Course 3",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    progress: 45,
    rating: 5,
  },
  {
    title: "Course 4",
    type: "Basics",
    lessons: 5,
    duration: 20,
    rating: 3,
    progress: 45,
  },
  {
    title: "Course 5",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    progress: 45,
    rating: 3,
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
    <div className="w-full min-h-full p-10">
      <h1 className={`${orbitron.className} font-semibold text-2xl`}>
        Active Courses
      </h1>
      <div className="flex justify-start items-center gap-4">
        {courses.map((course) => (
          <CourseCard
            lessons={course.lessons}
            title={course.title}
            rating={course.rating}
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
