"use client";

import {
	LuBookMarked,
	LuSettings,
	LuBell,
	LuMedal,
	LuLayoutDashboard,
	LuLogOut,
} from "react-icons/lu";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SidebarProp } from "src/app/types";
import NavLink from "@/components/UI/NavLink";
import React, { ReactNode } from "react";

const links: SidebarProp[] = [
	{ title: "Dashboard", path: "/dashboard", icon: <LuLayoutDashboard /> },
	{ title: "Courses", path: "/dashboard/courses", icon: <LuBookMarked /> },
	{
		title: "Competitions",
		path: "/dashboard/competitions",
		icon: <LuMedal />,
	},
	{
		title: "Leaderboard",
		path: "/dashboard/leaderboard",
		icon: <MdOutlineLeaderboard />,
	},
	{
		title: "Notifications",
		path: "/dashboard/notifications",
		icon: <LuBell />,
	},
	{ title: "Settings", path: "/dashboard/settings", icon: <LuSettings /> },
	{ title: "Log Out", path: "/dashboard/logout", icon: <LuLogOut /> },
];

const Sidebar = () => {
	return (
		<aside className='w-[250px] shadow-md h-[calc(100vh-74px)] fixed flex items-start '>
			<ul className='w-full py-1'>
				{links.map((link, index) => (
					<li>
						<SideBarNavLink
							path={link.path}
							title={link.title}
							icon={link.icon}
						/>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;

interface SideBarNavLinkProps {
	path: string;
	title: string;
	icon?: React.ReactNode;
}

const SideBarNavLink: React.FC<SideBarNavLinkProps> = ({
	path,
	title,
	icon,
}) => {
	return (
		<NavLink
			to={path}
			className='px-6 py-4 flex items-center gap-4 bg-white text-gray-900 sidebar-link border-r-8 border-transparent hover:border-[#000D7E] hover:text-[#000D7E] h-20 transition-colors duration-200 hover:bg-[#AEBFFF66]'>
			{icon && <span className='text-3xl'>{icon}</span>}
			<span className='text-lg'>{title}</span>
		</NavLink>
	);
};
