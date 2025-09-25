"use client";

import ContentCard from "@/components/contentCard";
import NavBar from "@/components/navbar";
import MyPersonal from "@/components/personal";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main
      className="min-h-screen flex flex-col md:flex-row gap-2 lg:gap-12 
      px-3 sm:px-4 md:px-6 lg:px-10 py-4 pb-14 md:py-10 lg:py-16"
    >
      {/* NavBar Mobile */}
      <NavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        variant="mobile"
      />

      {/* Left Fixed Card */}
      <MyPersonal />

      {/* Right Scrollable Card */}
      <ContentCard activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
};

export default Home;
