"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [priority, setPriority] = useState(true);

  const sidebarClassName =
    "fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-500 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64";

  return (
    <div className={sidebarClassName}>
      <div className="flex h-[100%] w-full flex-col justify-start">
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
            <HiOutlineLockClosed  className="mt-[0.1rem] text-gray-500 dark:text-gray-400" />
            <p className="text-xs text-gray-500 dark:text-gray-400">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
