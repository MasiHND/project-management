"use client";

import { useAppDispatch, useAppSelector } from "@/app/Redux";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  RiLockLine,
  RiLockUnlockLine,
  RiCloseLargeFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Home,
  Layers2,
  Layers3,
  LucideIcon,
  Search,
  Settings,
  Settings2,
  ShieldAlert,
  User,
  Users,
} from "lucide-react";
import { setIsSidebarCollapsed } from "@/state";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-500 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"} `;

  return (
    <div className={sidebarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Top Logo */}
        <div>
          <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 py-3 dark:bg-black">
            <Image
              src="/MasiHND-LogoBigLight.png"
              alt="MasiHND-Logo"
              width={250}
              height={250}
              className="block dark:hidden"
            />
            <Image
              src="/MasiHND-LogoBigDark.png"
              alt="MasiHND-Logo"
              width={250}
              height={250}
              className="hidden dark:block"
            />
          </div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() => {
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
              }}
            >
              <RiCloseLargeFill className="absolute right-5 top-5 z-30 h-6 w-6 text-gray-800 transition-all duration-300 hover:text-red-700 dark:text-gray-100 dark:hover:text-red-500" />
            </button>
          )}
        </div>

        {/* teams */}
        <div className="flex items-center gap-4 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-md font-bold uppercase tracking-wide dark:text-gray-200">
              MasiHND team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <RiLockLine className="mt-[0.1rem] text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Private
              </p>
            </div>
          </div>
        </div>
        {/* Navbar Links */}
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>
        {/* Projects Links */}
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span className="capitalize">Projects</span>
          {showProjects ? (
            <RiArrowUpSLine className="h-5 w-5" />
          ) : (
            <RiArrowDownSLine className="h-5 w-5" />
          )}
        </button>
        {/* Project Lists */}

        {/* priorities Links */}
        <button
          onClick={() => setShowPriority((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span className="capitalize">priority</span>
          {showPriority ? (
            <RiArrowUpSLine className="h-5 w-5" />
          ) : (
            <RiArrowDownSLine className="h-5 w-5" />
          )}
        </button>
        {showPriority && (
          <>
            <SidebarLink
              icon={ShieldAlert}
              label="Urgent"
              href="/priority/urgent"
            />
            <SidebarLink
              icon={AlertTriangle}
              label="High"
              href="/priority/high"
            />
            <SidebarLink
              icon={AlertOctagon}
              label="Medium"
              href="/priority/medium"
            />
            <SidebarLink icon={AlertCircle} label="Low" href="/priority/low" />
            <SidebarLink
              icon={Layers3}
              label="Backlog"
              href="/priority/backlog"
            />
          </>
        )}
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-4 rounded-md px-8 py-3 transition-colors hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 ${isActive ? "bg-gray-200 text-white dark:bg-gray-800" : ""} justify-start`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-indigo-500 dark:bg-yellow-400" />
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span
          className={`font-medium capitalize text-gray-800 dark:text-gray-100`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default Sidebar;
