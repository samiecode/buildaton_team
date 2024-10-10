import { PiStarFill } from "react-icons/pi";

const Rating = ({ rate }: { rate: number }) => {
  const arr = new Array(rate).fill(0);
  return (
    <div className="flex items-center justify-start">
      {arr.map((star, i) => (
        <PiStarFill key={i} fill="#F4B400" />
      ))}
    </div>
  );
};
export default Rating;
