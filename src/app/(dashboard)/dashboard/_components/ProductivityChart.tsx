"use client";

import React from "react";
import { orbitron } from "@/app/fonts";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Cell,
	Tooltip,
	CartesianGrid,
} from "recharts";
import DashboardCard from "./DashboardCard";

interface ProductivityData {
	day: string;
	hours: number;
}

interface ProductivityChartProps {
	data: ProductivityData[];
}

const ProductivityChart: React.FC<ProductivityChartProps> = ({ data }) => {
	return (
		<DashboardCard
			className='w-[480px]'
			title='Productivity'>
			<>
				<ResponsiveContainer
					width='100%'
					height='90%'>
					<BarChart data={data}>
						<CartesianGrid
							horizontal={true}
							vertical={false}
						/>
						<XAxis dataKey='day' />
						<YAxis tickFormatter={(value) => `${value}h`} />
						<Tooltip />

						<Bar
							dataKey='hours'
							fill='#00229E'
							barSize={20}
							radius={[10, 10, 0, 0]}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									// fill={entry.hours > 2.5 ? "#00229E" : "#7EB2FF"} This is for future customization
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</>
		</DashboardCard>
	);
};

export default ProductivityChart;

// "use client";

// import { orbitron } from "@/app/fonts";

// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

// interface ProductivityData {
// 	day: string;
// 	hours: number;
// }

// interface ProductivityChartProps {
// 	data: ProductivityData[];
// }

// const ProductivityChart: React.FC<ProductivityChartProps> = ({ data }) => {
// 	return (
// 		<div className='bg-white shadow-lg p-6 rounded-xl w-[480px] h-[300px]'>
// 			<h2 className={`text-xl font-semibold mb-4 ${orbitron.className}`}>
// 				Productivity
// 			</h2>
// 			<ResponsiveContainer
// 				width='100%'
// 				height='90%'>
// 				<BarChart data={data}>
// 					<XAxis dataKey='day' />
// 					<YAxis />
// 					<Bar
// 						dataKey='hours'
// 						fill='#00229E'
// 						barSize={30}
// 					/>
// 				</BarChart>
// 			</ResponsiveContainer>
// 		</div>
// 	);
// };

// export default ProductivityChart;
