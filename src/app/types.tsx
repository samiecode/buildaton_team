import {
  DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES,
  ReactNode,
} from "react";
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
export interface CourseProp {
	courseID?: string;
	coverPhotoUrl?: string;
	title: string;
	lessons: number;
	duration: number;
	progress: number;
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

// productivity type
export interface ProductivityData {
	day: string;
	hours: number;
}
