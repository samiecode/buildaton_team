import { ReactNode } from "react";
import { IconType } from "react-icons";

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
  name: string;
  lessons: number;
  duration: number;
  progress: number;
  type: string;
}
