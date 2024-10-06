"use client"
import { usePathname, useRouter } from "next/navigation"
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { LuMedal } from "react-icons/lu";
import { MdOutlineLeaderboard } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { SidebarProp } from "src/app/types";
import { ReactNode } from "react";
import clsx from "clsx"
import Link from "next/link";
const links: SidebarProp[] = [
  {name: 'Dashboard', path: '/dashboard', icon: LuLayoutDashboard},  {name: 'Courses', path: '/courses', icon: LuLayoutDashboard},  {name: 'Competitions', path: '/competitions', icon: LuLayoutDashboard},  {name: 'Leaderboard', path: '/leaderboard', icon: LuLayoutDashboard},  {name: 'Notifications', path: '/notifications', icon: LuLayoutDashboard},  {name: 'Settings', path: '/settings', icon: LuLayoutDashboard},  {name: 'Log Out', path: '/logout', icon: LuLayoutDashboard},
]
const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const LInkItem: React.FC<SidebarProp> = ({ icon, name, path, }): ReactNode => {
    const LinkIcon = icon
  return <Link className={clsx("p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ", {
    " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700": pathname === path
  })
  } href={path}>
    <LinkIcon />
    <p className="hidden md:block">{name}</p>
  </Link>
}
  return <div className="w-1/5 shadow-md min-h-screen pb-4">
    <ul >

    </ul>
  </div>
}

export default Sidebar
 {/* <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/dashboard') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('./')}><LuLayoutDashboard className="text-xl" />Dashboard</li>
      <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/courses') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('/dashboard/courses')}><LuBookMarked className="text-xl" />Courses</li>
      <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/competitions') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('/dashboard/competitions')}><LuMedal className="text-xl" />Competitions</li>
      <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/leaderboard') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('/dashboard/leaderboard')}><MdOutlineLeaderboard className="text-xl" />Leaderboard</li>
      <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/notifications') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('/dashboard/notifications')}><LuBell className="text-xl" />Notifications</li>
      <li className={`p-4 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center ${pathname?.endsWith('/settings') && " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700"}`} onClick={() => handleClick('/dashboard/settings')}><LuSettings className="text-xl" />Settings
      </li> */}