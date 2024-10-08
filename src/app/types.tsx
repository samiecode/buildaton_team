import { ReactNode } from "react";
// import { IconType } from "react-icons"; //I couldn't work with the IconTypw

export interface InputProps {
	label: string;
	placeholder: string;
	id: string;
	type: string;
}
export interface DashboardLayoutProps {
	children: ReactNode;
}
export interface SidebarProp {
	path: string;
	title: string;
	icon: ReactNode;
	// icon: IconType;
}
