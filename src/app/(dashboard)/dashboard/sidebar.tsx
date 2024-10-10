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

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-1/5 shadow-md min-h-screen pb-4">
      <ul>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard",
            }
          )}
          href={"/dashboard"}
        >
          <LuLayoutDashboard />
          <p className="hidden md:block">Dashboard</p>
        </Link>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard/courses",
            }
          )}
          href={"/dashboard/courses"}
        >
          <LuBookMarked />
          <p className="hidden md:block">Courses</p>
        </Link>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard/competitions",
            }
          )}
          href={"/dashboard/competitions"}
        >
          <LuMedal />
          <p className="hidden md:block">Competitions</p>
        </Link>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard/leaderboard",
            }
          )}
          href={"/dashboard/leaderboard"}
        >
          <MdOutlineLeaderboard />
          <p className="hidden md:block">Leaderboard</p>
        </Link>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard/notifications",
            }
          )}
          href={"/dashboard/notifications"}
        >
          <LuBell />
          <p className="hidden md:block">Notifications</p>
        </Link>
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/dashboard/settings",
            }
          )}
          href={"/dashboard/settings"}
        >
          <LuSettings />
          <p className="hidden md:block">Settings</p>
        </Link>
        {pathname === "/dashboard/settings" && (
          <ul>
            <Link
              className={clsx(
                "p-3 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-md",
                {
                  " bg-blue-700/5 text-blue-700":
                    pathname.endsWith("/settings"),
                }
              )}
              href={"/dashboard/settings/"}
            >
              <LuUser2 className="ml-14" />
              <p className="hidden md:block">Profile</p>
            </Link>
            <Link
              className={clsx(
                "p-3 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-md",
                {
                  " bg-blue-700/5 text-blue-700":
                    pathname.endsWith("/password"),
                }
              )}
              href={"/dashboard/settings/password"}
            >
              <LuLock className="ml-14" />
              <p className="hidden md:block">Password</p>
            </Link>
            <Link
              className={clsx(
                "p-3 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-md",
                {
                  " bg-blue-700/5 text-blue-700":
                    pathname.endsWith("/verification"),
                }
              )}
              href={"/dashboard/settings/verification"}
            >
              <LuKeySquare className="ml-14" />
              <p className="hidden md:block">Verification</p>
            </Link>
            <Link
              className={clsx(
                "p-3 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-md",
                {
                  " bg-blue-700/5 text-blue-700":
                    pathname.endsWith("/notifications"),
                }
              )}
              href={"/dashboard/settings/notifications"}
            >
              <LuBell className="ml-14" />
              <p className="hidden md:block">Notifications</p>
            </Link>
          </ul>
        )}
        <Link
          className={clsx(
            "py-4 px-10 cursor-pointer hover:bg-blue-700/5 flex justify-start gap-3 items-center text-lg",
            {
              " bg-blue-700/5 border-blue-700 border-r-[12px] text-blue-700":
                pathname === "/logout",
            }
          )}
          href={"/logout"}
        >
          <LuLogOut />
          <p className="hidden md:block">Logout</p>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
