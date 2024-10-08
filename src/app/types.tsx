import { ReactNode } from "react";
// import { IconType } from "react-icons"; //I couldn't work with the IconTypw

export interface InputProps {
<<<<<<< HEAD
  label: string;
  placeholder: string;
  id: string;
  type: string;
}
export interface DashboardLayoutProps {
  children: ReactNode;
}
export interface CourseProp {
  name: string;
  lessons: number;
  duration: number;
  progress: number;
  type: string;
}
=======
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
>>>>>>> d9aaf346edcf5fd5a8ad450c8a877dea95d0d927
