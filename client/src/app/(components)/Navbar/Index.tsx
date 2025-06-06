import React from "react";
import Link from "next/link";
// icons
import {
  RiSideBarFill ,
  RiSettings4Fill,
  RiSearchEyeLine,
  RiMoonClearLine,
  RiSunLine,
} from "react-icons/ri";

import { useAppDispatch, useAppSelector } from "@/app/Redux";
import { setIsSidebarCollapsed, setIsDarkMode } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <RiSideBarFill  className="h-8 w-8 transition-all duration-300 hover:text-indigo-700 dark:text-gray-100 dark:hover:text-cyan-400" />
          </button>
        )}
        <div className="group relative flex h-min w-[200px]">
          <RiSearchEyeLine className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer transition-all duration-300 group-hover:text-indigo-800 dark:text-white group-hover:dark:text-purple-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg border-none bg-gray-200 p-2 pl-8 placeholder-gray-500 transition-all duration-300 hover:bg-gray-300 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-indigo-800/40 dark:bg-gray-700 dark:text-white dark:placeholder-white hover:dark:bg-gray-600 dark:focus:ring-indigo-500/80"
          />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          {isDarkMode ? (
            <RiSunLine className="h-7 w-7 cursor-pointer dark:text-white" />
          ) : (
            <RiMoonClearLine className="h-7 w-7 cursor-pointer dark:text-white" />
          )}
        </button>
        <Link
          href="/settings"
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          <RiSettings4Fill className="h-8 w-8 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
