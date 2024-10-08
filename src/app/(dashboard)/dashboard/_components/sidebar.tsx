"use client";
import { usePathname, useRouter } from "next/navigation";
import { LuBook, LuLayoutDashboard } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { LuMedal } from "react-icons/lu";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuKeySquare } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import clsx from "clsx";
import Link from "next/link";

const generalLinkClass =
	"py-4 px-10 cursor-pointer hover:bg-[#AEBFFF66] hover:text-[#00229E] transition-colors duration-300 h-20 w-full text-lg flex justify-start gap-3 items-center text-lg";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className='w-[250px] shadow-md h-[calc(100vh-74px)] flex items-start'>
			<ul className='w-full py-1'>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard",
					})}
					href={"/dashboard"}>
					<span className='text-3xl'>
						<LuLayoutDashboard />
					</span>
					<p className='hidden md:block'>Dashboard</p>
				</Link>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard/courses",
					})}
					href={"/dashboard"}>
					<span className='text-3xl'>
						<LuBookMarked />
					</span>
					<p className='hidden md:block'>Courses</p>
				</Link>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard/competitions",
					})}
					href={"/dashboard"}>
					<span className='text-3xl'>
						<LuMedal />
					</span>
					<p className='hidden md:block'>Competitions</p>
				</Link>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard/leaderboard",
					})}
					href={"/dashboard/leaderboard"}>
					<span className='text-3xl'>
						<MdOutlineLeaderboard />
					</span>
					<p className='hidden md:block'>Leaderboard</p>
				</Link>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard/notifications",
					})}
					href={"/dashboard/notifications"}>
					<span className='text-3xl'>
						<LuBell />
					</span>
					<p className='hidden md:block'>Notifications</p>
				</Link>
				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/dashboard/settings",
					})}
					href={"/dashboard/settings"}>
					<span className='text-3xl'>
						<LuSettings />
					</span>
					<p className='hidden md:block'>Settings</p>
				</Link>

				{pathname === "/dashboard/settings" && (
					<ul>
						<Link
							className={clsx(
								"p-3 cursor-pointer hover:bg-[#AEBFFF66] flex justify-start gap-3 items-center text-md",
								{
									" bg-[#AEBFFF66] text-[#00229E]":
										pathname.endsWith("/settings"),
								}
							)}
							href={"/dashboard/settings/"}>
							<span className='text-2xl'>
								<LuUser2 className='ml-14' />
							</span>
							<p className='hidden md:block'>Profile</p>
						</Link>

						<Link
							className={clsx(
								"p-3 cursor-pointer hover:bg-[#AEBFFF66] flex justify-start gap-3 items-center text-md",
								{
									" bg-[#AEBFFF66] text-[#00229E]":
										pathname.endsWith("/password"),
								}
							)}
							href={"/dashboard/settings/password"}>
							<span className='text-2xl'>
								<LuLock className='ml-14' />
							</span>
							<p className='hidden md:block'>Password</p>
						</Link>

						<Link
							className={clsx(
								"p-3 cursor-pointer hover:bg-[#AEBFFF66] flex justify-start gap-3 items-center text-md",
								{
									" bg-[#AEBFFF66] text-[#00229E]":
										pathname.endsWith("/verification"),
								}
							)}
							href={"/dashboard/settings/verification"}>
							<span className='text-2xl'>
								<LuKeySquare className='ml-14' />
							</span>
							<p className='hidden md:block'>Verification</p>
						</Link>

						<Link
							className={clsx(
								"p-3 cursor-pointer hover:bg-[#AEBFFF66] flex justify-start gap-3 items-center text-md",
								{
									" bg-[#AEBFFF66] text-[#00229E]":
										pathname.endsWith("/notifications"),
								}
							)}
							href={"/dashboard/settings/notifications"}>
							<span className='text-2xl'>
								<LuBell className='ml-14' />
							</span>
							<p className='hidden md:block'>Notifications</p>
						</Link>
					</ul>
				)}

				<Link
					className={clsx(generalLinkClass, {
						" bg-[#AEBFFF66] border-[#00229E] border-r-8 text-[#00229E]":
							pathname === "/logout",
					})}
					href={"/logout"}>
					<span className='text-3xl'>
						<MdOutlineLeaderboard />
					</span>
					<p className='hidden md:block'>Logout</p>
				</Link>
			</ul>
		</aside>
	);
};

export default Sidebar;
