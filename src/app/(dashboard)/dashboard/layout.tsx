import React from "react";
import { DashboardLayoutProps } from "../../types";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

const DashBoardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<main className='grid grid-cols-[250px_1fr] w-full'>
				<section className='w-[250px] relative'>
					<Sidebar />
				</section>
				<div className='bg-gray-100 h-full w-full p-12'>{children}</div>
			</main>
		</div>
	);
};
export default DashBoardLayout;
