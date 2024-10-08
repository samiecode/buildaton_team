import React from "react";
import { DashboardLayoutProps } from "../../types";
import Header from "./header";
import Sidebar from "./sidebar";
const DashBoardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <div className="bg-gray-100 min-h-full w-4/5">{children}</div>
      </div>
    </div>
  );
};
export default DashBoardLayout