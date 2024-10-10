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
  name: string;
  lessons: number;
  duration: number;
  type: string;
  size?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}
