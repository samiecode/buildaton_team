import clsx from "clsx";
import { CourseProp } from "../../types";
import Rating from "./Rating";
const CourseCard: React.FC<CourseProp> = ({
  name,
  size = "normal",
  lessons,
  duration,
  rating,
  type,
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-3xl shadow-lg p-5 w-1/4 flex flex-col gap-2 hover:scale-105 transition-all ease-linear cursor-pointer"
      )}
    >
      <div className="my-2 flex flex-row items-center gap-3">
        <div className="rounded-full bg-gray-100 w-[60px] h-[60px] grid items-center"></div>
        <span>
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm text-gray-500">{lessons} lessons</p>
        </span>
      </div>
      <div className="my-4 flex-row flex gap-3 justify-between items-center">
        <span>
          <p className="text-sm text-gray-500">Rating:</p>
          <div className="font-semibold text-sm">
            <Rating rate={rating} />
          </div>
        </span>
        <span>
          <p className="text-sm text-gray-500">Duration:</p>
          <div className="font-semibold text-sm">{duration} minutes</div>
        </span>
        <span>
          <p className="text-sm text-gray-500">Category:</p>
          <div className="font-semibold text-sm">{type}</div>
        </span>
      </div>
    </div>
  );
};
export default CourseCard;
