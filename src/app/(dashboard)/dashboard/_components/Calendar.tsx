"use client";

import {
	format,
	isSameDay,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
} from "date-fns";
import { orbitron } from "@/app/fonts";
import DashboardCard from "./DashboardCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

interface CalendarProps {
	year: number;
	month: number;
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
	const startDate = startOfMonth(new Date(year, month));
	const endDate = endOfMonth(startDate);
	const days = eachDayOfInterval({ start: startDate, end: endDate });
	const today = new Date();

	const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

	return (
		<DashboardCard
			hasTitle={false}
			className='min-w-[270px]'>
			<>
				<div className='flex items-center justify-between px-2 mb-4'>
					<button className='rounded-full p-1 hover:opacity-70 transition-opacity duration-300 bg-gray-200 flex items-center justify-center'>
						<FaArrowLeft />
					</button>
					<h2
						className={`text-xl font-semibold ${orbitron.className} capitalize`}>
						{format(startDate, "MMMM yyyy")}
					</h2>
					<button className='rounded-full p-1 hover:opacity-70 transition-opacity duration-300 bg-gray-200 flex items-center justify-center'>
						<FaArrowRight />
					</button>
				</div>
				<div className=' bg-[#EBEBEB] rounded-full grid grid-cols-7 gap-1 w-full p-1'>
					{weekDays.map((day) => (
						<div
							key={day}
							className='text-center font-bold'>
							{day}
						</div>
					))}
				</div>
				<div className='grid grid-cols-7 gap-1'>
					{Array(startDate.getDay())
						.fill(null)
						.map((_, index) => (
							<div key={`empty-${index}`} />
						))}
					{days.map((day): any => (
						<div
							key={day.toString()}
							className={`text-center p-2 rounded-full hover:bg-[#00229E] cursor-pointer hover:text-white transition-colors duration-300 ${
								isSameDay(day, today)
									? "bg-[#00229E] text-white"
									: ""
							}`}>
							{format(day, "d")}
						</div>
					))}
				</div>
			</>
		</DashboardCard>
	);
};

export default Calendar;
