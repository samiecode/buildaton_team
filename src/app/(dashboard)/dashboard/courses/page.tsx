import { orbitron } from "@/app/fonts";
import CourseCard from "../CourseCard";
import { CourseProp } from "@/app/types";

const courses: CourseProp[] = [
  {
    name: "Course 1",
    type: "Basics",
    lessons: 3,
    duration: 30,
    size: "large",
    rating: 3,
  },
  {
    name: "Course 2",
    type: "Wallets",
    lessons: 4,
    duration: 40,
    size: "large",
    rating: 4,
  },
  {
    name: "Course 3",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    size: "large",
    rating: 5,
  },
  {
    name: "Course 4",
    type: "Basics",
    lessons: 5,
    duration: 20,
    rating: 3,
    size: "large",
  },
  {
    name: "Course 5",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    size: "large",
    rating: 3,
  },
  {
    name: "Course 6",
    type: "Wallets",
    lessons: 4,
    duration: 40,
    rating: 4,
    size: "large",
  },
  {
    name: "Course 7",
    type: "Transactions",
    lessons: 5,
    duration: 40,
    rating: 5,
    size: "large",
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
            size={course.size}
            lessons={course.lessons}
            name={course.name}
            type={course.type}
            rating={course.rating}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};
export default Courses;
