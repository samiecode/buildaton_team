import { orbitron } from "@/app/fonts";
import CourseCard from "../CourseCard";
import { CourseProp } from "@/app/types";

const courses: CourseProp[] = [
  {
    title: "Course 1",
    type: "Basics",
    lessons: 3,
    duration: 30,
    progress: 45,
    rating: 3,
  },
  {
    title: "Course 2",
    type: "Wallets",
    lessons: 4,
    duration: 40,
    progress: 45,
    rating: 4,
  },
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
  {
    title: "Course 6",
    type: "Wallets",
    lessons: 4,
    duration: 40,
    rating: 4,
    progress: 45,
  },
  {
    title: "Course 7",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    rating: 5,
    progress: 45,
  },
];
const Courses = () => {
  return (
    <div className="w-full min-h-full p-10">
      <h1 className={`${orbitron.className} font-semibold text-2xl`}>
        My Courses
      </h1>
      <div className="flex justify-start items-center flex-wrap w-full gap-6 my-3">
        {courses.map((course, i) => (
          <CourseCard
            key={i}
            lessons={course.lessons}
            title={course.title}
            type={course.type}
            rating={course.rating}
            duration={course.duration}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
};
export default Courses;
