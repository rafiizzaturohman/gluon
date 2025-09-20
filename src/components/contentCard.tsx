"use client";

import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./about";
import MyContact from "./contact";
import MyResume from "./resume";
import NavBar from "./navbar"; // tambahkan import
import MyPortfolio from "./portfolio";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void; // tambahkan
};

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ContentCard = ({ activeTab, setActiveTab }: Props) => {
  return (
    <section className="content-card relative flex-1 h-full overflow-hidden">
      {/* Navbar versi desktop (pojok kanan atas) */}
      <div className="hidden md:block absolute top-0 right-0 z-50">
        <NavBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="desktop"
        />
      </div>

      {/* Isi content */}
      <AnimatePresence mode="wait">
        {activeTab === "about" && (
          <motion.div
            key="about"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <AboutMe />
          </motion.div>
        )}

        {activeTab === "resume" && (
          <motion.div
            key="resume"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <MyResume />
          </motion.div>
        )}

        {activeTab === "portfolio" && (
          <motion.div
            key="portfolio"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <MyPortfolio />
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            key="contact"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <MyContact />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContentCard;
