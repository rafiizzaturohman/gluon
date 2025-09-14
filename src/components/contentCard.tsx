"use client";

import AboutMe from "./about";
import MyResume from "./resume";

type Props = {
  activeTab: string;
};

const ContentCard = ({ activeTab }: Props) => {
  return (
    <section className="flex-1 h-full pb-1.5 overflow-hidden">
      {activeTab === "about" && <AboutMe />}
      {activeTab === "resume" && <MyResume />}
      {activeTab === "portfolio" && (
        <h1 className="text-2xl font-bold">Portofolio Section</h1>
      )}
      {activeTab === "contact" && (
        <h1 className="text-2xl font-bold">Contact Section</h1>
      )}
    </section>
  );
};

export default ContentCard;
