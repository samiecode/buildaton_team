import { orbitron } from "@/app/fonts";
import CourseCard from "./CourseCard";
import { CourseProp } from "@/app/types";

const courses: CourseProp[] = [
  {
    name: "Course 1",
    type: "Basics",
    lessons: 3,
    duration: 30,
    rating: 4,
  },
  {
    name: "Course 2",
    type: "Wallets",
    lessons: 4,
    duration: 40,
    rating: 5,
  },
  {
    name: "Course 3",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    rating: 3,
  },
];
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
            rating={course.rating}
            name={course.name}
            type={course.type}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
