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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profileInfo = [
  {
    label: "email",
    value: "rafiizzaturohman@gmail.com",
    icon: EnvelopeIcon,
    link: "mailto:rafiizzaturohman@gmail.com",
  },
  {
    label: "phone",
    value: "+62 896-4634-3783",
    icon: PhoneIcon,
    link: "https://wa.me/6289646343783",
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
  const [isDesktop, setIsDesktop] = useState(false);

  // Cek ukuran layar
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if ("matches" in e) {
        setIsDesktop(e.matches);
        setIsOpen(e.matches); // kalau desktop = true, mobile = false
      } else {
        setIsDesktop((e as MediaQueryList).matches);
        setIsOpen((e as MediaQueryList).matches);
      }
    };

    handleChange(mediaQuery); // inisialisasi pertama
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <aside className="w-auto md:w-1/4">
      <div
        className={`relative profile-card md:fixed 
        p-6 md:px-8 md:pt-16 shadow-lg space-y-7
        transition-all duration-500 ease-in-out
        ${isOpen ? "pb-6 md:pb-6" : "pb-0 md:pb-0"}
        `}
      >
        {/* Profile Header */}
        <div className="profile-content flex flex-row md:flex-col items-center gap-3 md:gap-6">
          <div className="profile-image">
            <Image src={MyPict} alt="Profile picture" fill priority />
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <h2 className="card-title text-base md:text-lg">
              Rafi Izzaturohman
            </h2>
            <p className="card-title-text">Web Developer</p>
          </div>
        </div>

        {/* Toggle button (hanya tampil di mobile) */}
        {!isDesktop && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white absolute top-0 right-0"
          >
            <div
              className={`relative overflow-hidden
                rounded-bl-[14px] rounded-tr-[14px]
                p-1.5 border-[#d97706]
                transition-all duration-300 ease-in-out
                ${isOpen ? "border-b border-r" : "border-t border-l"}
              `}
            >
              {/* Layer 1 */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#d9770660] via-[#d9770640] to-[#1c1a1800]"
              />

              {/* Layer 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-tl from-[#d9770660] via-[#d9770640] to-[#1c1a1800]"
              />

              {/* Chevron crossfade */}
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="up"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <ChevronUpIcon className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="down"
                    initial={{ rotate: -180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        )}

        {/* Animated HR */}
        <AnimatePresence>
          {isOpen && (
            <motion.hr
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.2, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.4 }}
              className="origin-center md:opacity-20 my-6 md:my-10"
            />
          )}
        </AnimatePresence>

        {/* Profile Info */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="profile-info"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden md:overflow-visible space-y-4 md:space-y-10"
            >
              {profileInfo.map((item, index) => (
                <div key={index} className="flex flex-row gap-4 items-center">
                  <div className="card-border">
                    <item.icon className="card-icon w-4 md:w-6 h-4 md:h-6" />
                  </div>
                  {item.label === "email" ? (
                    <div className="space-y-0.5">
                      <p className="uppercase text-[9px] md:text-xs tracking-wider">
                        {item.label}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-white text-[10px] md:text-sm tracking-wide"
                      >
                        {item.value}
                      </a>
                    </div>
                  ) : item.label === "phone" ? (
                    <div className="space-y-0.5">
                      <p className="uppercase text-[9px] md:text-xs tracking-wider">
                        {item.label}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-white text-[10px] md:text-sm tracking-wide"
                      >
                        {item.value}
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-0.5">
                      <p className="uppercase text-[9px] md:text-xs tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white text-[10px] md:text-sm tracking-wide">
                        {item.value}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.2, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.4 }}
                className="origin-center md:opacity-20 my-6 md:my-6"
              />

              {/* Socials */}
              <div className="flex flex-row gap-2 justify-center items-center text-center">
                <a
                  href="https://www.github.com/rafiizzaturohman/"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/fiizzat" target="_blank">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/rafiizza/">
                  <LinkedInIcon />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};

export default MyPersonal;
