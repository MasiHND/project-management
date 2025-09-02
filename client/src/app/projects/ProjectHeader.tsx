import Header from "@/components/Header";
import React, { useState } from "react";
import {
  RiGridLine,
  RiListUnordered,
  RiTableView,
  RiTimeLine,
} from "react-icons/ri";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);
  return (
    <div className="px-4 xl:px-6">
      {/* Modal New Project */}
      <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Product Design Development" />
      </div>

      {/* tabs */}
      <div className="flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center">
        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <TabButton
            name="Board"
            icon={<RiGridLine className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="List"
            icon={<RiListUnordered className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Timeline"
            icon={<RiTimeLine className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <TabButton
            name="Table"
            icon={<RiTableView className="h-5 w-5" />}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
};

type TabButtonProps = {
  name: string;
  icon: React.ReactNode;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};
const TabButton = ({ name, icon, setActiveTab, activeTab }: TabButtonProps) => {
  const isActive = activeTab === name;
  return (
    <button
      className={`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""}`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      <span
        className={`font-medium capitalize text-gray-800 dark:text-gray-100`}
      >
        {name}
      </span>
    </button>
  );
};

export default ProjectHeader;
