"use client";

import { motion } from "framer-motion";

type Props = {
  setActiveTab: (tab: string) => void;
  activeTab: string;
  variant?: "mobile" | "desktop"; // tambahan
};

const NavBar = ({ setActiveTab, activeTab, variant = "mobile" }: Props) => {
  const tabs = ["about", "resume", "portfolio", "contact"];

  return (
    <div>
      {variant === "mobile" && (
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
          <div className="navbar-card-mobile bg-[#1c1a18]/50 backdrop-blur-md">
            <div className="items-layout-mobile">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative py-0.5 text-xs font-medium transition-colors capitalize hover:text-gray-400 cursor-pointer ${
                    activeTab === tab ? "text-[#d97706]" : "text-gray-300"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-[2px] bg-[#d97706] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === "desktop" && (
        <div className="navbar-card-desktop">
          <div className="items-layout-desktop">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-sm font-semibold tracking-wide transition-colors capitalize hover:text-gray-400 cursor-pointer ${
                  activeTab === tab ? "text-[#d97706]" : "text-gray-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[2px] bg-[#d97706] rounded-full -bottom-1"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
