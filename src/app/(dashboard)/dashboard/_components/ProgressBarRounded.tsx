"use client";

import { orbitron } from "@/app/fonts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardCard from "./DashboardCard";

interface ProgressChartProps {
	percentage: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ percentage }) => {
	return (
		<DashboardCard
			title='Progress'
			className='min-w-[270px] '>
			<>
				<div className='w-48 h-48 mx-auto font-extrabold mt-6'>
					<CircularProgressbar
						value={percentage}
						text={`${percentage}%`}
						strokeWidth={12}
						// radius
						styles={buildStyles({
							rotation: 0,
							strokeLinecap: "round",
							textSize: "16px",
							pathTransitionDuration: 0.5,
							pathColor: `rgba(0, 34, 158, ${percentage / 100})`,
							textColor: "black",
							trailColor: "white",
						})}
					/>
				</div>
			</>
		</DashboardCard>
	);
};

export default ProgressChart;
