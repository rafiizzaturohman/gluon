"use client";

import Image from "next/image";
import MyPict from "../../public/image/mypict.png";
import {
  CakeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { InstagramIcon, LinkedInIcon, GitHubIcon } from "@/app/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profileInfo = [
  {
    label: "email",
    value: "rafiizzaturohman@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    label: "phone",
    value: "+62 896-4634-3783",
    icon: PhoneIcon,
  },
  {
    label: "birthday",
    value: "May 14, 2004",
    icon: CakeIcon,
  },
  {
    label: "location",
    value: "Bandung, Indonesia",
    icon: MapPinIcon,
  },
];

const MyPersonal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-auto md:w-1/4">
      <div className="relative profile-card md:fixed p-6 md:px-8 md:py-16 shadow-lg space-y-8">
        <div className="profile-content">
          <div className="profile-image">
            <Image
              src={MyPict}
              alt="Profile picture"
              fill // automatically fills the parent div
              priority
            />
          </div>

          <div className="space-y-0.5 md:space-y-4 font-sans">
            <h2 className="card-title text-base md:text-lg md:text-center">
              Rafi Izzaturohman
            </h2>

            <p className="card-title-text">Web Developer</p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center gap-2 text-sm text-gray-300 hover:text-white absolute top-0 right-0"
        >
          <div
            className={`
          relative overflow-hidden
          rounded-bl-[14px] rounded-tr-[14px]
          p-1.5 border-[#d97706]
          transition-all duration-300 ease-in-out
          ${isOpen ? "border-b border-r" : "border-t border-l"}
        `}
          >
            {/* Layer 1 (default gradient) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-br from-[#d9770660] via-[#d9770644] to-[#1c1a1800]"
            />

            {/* Layer 2 (overlay gradient) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-tl from-[#d9770660] via-[#d9770644] to-[#1c1a1800]"
            />

            {/* Chevron crossfade + rotate */}
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="up"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <ChevronUpIcon className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="down"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <ChevronDownIcon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>

        <hr className="opacity-20 hidden md:block md:my-10" />

        {/* Profile Information */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 space-y-4 md:space-y-10`}
        >
          {profileInfo.map((item, index) => (
            <div key={index} className="flex flex-row gap-4 items-center">
              <div className="card-border">
                <item.icon className="card-icon w-4 md:w-6 h-4 md:h-6" />
              </div>
              <div className="space-y-0.5">
                <p className="uppercase text-[9px] md:text-xs tracking-wider">
                  {item.label}
                </p>
                <p className="text-white text-[10px] md:text-sm tracking-wide">
                  {item.value}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-row gap-2 justify-center items-center text-center">
            <a href="https://www.github.com/rafiizzaturohman/" target="_blank">
              <GitHubIcon />
            </a>

            <a href="https://www.instagram.com/fiizzat" target="_blank">
              <InstagramIcon />
            </a>

            <a href="https://www.linkedin.com/in/rafiizza/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MyPersonal;
