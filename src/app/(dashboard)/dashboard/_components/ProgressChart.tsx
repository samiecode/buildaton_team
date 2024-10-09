import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

interface ProgressChartProps {
	progressPercentage: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({
	progressPercentage,
}) => {
	return (
		<div className='bg-white shadow-lg p-6 rounded-lg'>
			<h2 className='text-xl font-semibold mb-4'>Progress</h2>
			<div className='w-48 h-48 mx-auto'>
				<CircularProgressbar
					value={progressPercentage}
					text={`${progressPercentage}%`}
					styles={buildStyles({
						rotation: 0.75,
						strokeLinecap: "butt",
						textSize: "16px",
						pathTransitionDuration: 0.5,
						pathColor: `rgba(0, 0, 255, ${progressPercentage / 100})`,
						textColor: "#000000",
						trailColor: "#d6d6d6",
						backgroundColor: "#3e98c7",
					})}
				/>
			</div>
		</div>
	);
};

export default ProgressChart;
