"use client";

import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./about";
import MyContact from "./contact";
import MyResume from "./resume";

type Props = {
  activeTab: string;
};

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ContentCard = ({ activeTab }: Props) => {
  return (
    <section className="flex-1 h-full pb-1.5 overflow-hidden">
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
            <h1 className="text-2xl font-bold">Portofolio Section</h1>
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
