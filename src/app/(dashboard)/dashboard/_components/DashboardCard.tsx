import { orbitron } from "@/app/fonts";
import { ReactNode } from "react";

function DashboardCard({
	children,
	className = "",
	title = "",
	hasTitle = true,
}: {
	children: ReactNode;
	className?: string;
	hasTitle?: boolean;
	title?: string;
}) {
	return (
		<div
			className={`bg-white shadow-lg p-6 rounded-xl h-full ${className}`}>
			{hasTitle && (
				<h2
					className={`text-xl font-semibold mb-4 ${orbitron.className} capitalize`}>
					{title}
				</h2>
			)}
			{children}
		</div>
	);
}

export default DashboardCard;
