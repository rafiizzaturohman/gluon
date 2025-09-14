"use client";

import { motion } from "framer-motion";

type Props = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

const NavBar = ({ setActiveTab, activeTab }: Props) => {
  const tabs = ["about", "resume", "portfolio", "contact"];

  return (
    <div className="fixed -bottom-[0.5px] left-0 w-full z-50">
      <div className="navbar-card bg-[#1c1a18]/50 backdrop-blur-md">
        <div className="items-layout">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-0.5 text-sm font-medium transition-colors capitalize ${
                activeTab === tab ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {tab}

              {/* underline indicator */}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[2px] bg-yellow-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
