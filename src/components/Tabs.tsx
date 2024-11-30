import React, { useState } from "react";
import { FaBookReader, FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import Card from "./Card";
import About from "./About";
import { GoProjectSymlink } from "react-icons/go";
import Contact from "./Contact";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="w-full md:w-1/2 lg:w-1/4 p-0 md:p-4">
          <Card
            key={index}
            title="Amazing card"
            description="This is a card"
            image="https://placehold.co/600x400"
            link = "https://placehold.co/600x400"
          />
        </div>
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "project",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="w-full md:w-1/2 lg:w-1/4 p-0 md:p-4">
          <Card
            key={index}
            title="Amazing card"
            description="This is a card"
            image="https://placehold.co/600x400"
            link = "https://placehold.co/600x400"
          />
        </div>
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <FaBookReader />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="w-full md:w-1/2 lg:w-1/4 p-0 md:p-4">
          <Card
            key={index}
            title="Amazing card"
            description="This is a card"
            image="https://placehold.co/600x400"
            link = "https://placehold.co/600x400"
          />
        </div>
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b- border-gray-200 overflow-x-scroll sm:overflow-x-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center px-4 py-2 font-medium text-sm ${
              activeTab === tab.id ? "border-b-2" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex justify-center items-center gap-2">
              <span className="icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
