"use client";

import Education from "@/components/card-content/resume/edu";
import Experience from "@/components/card-content/resume/exp";

const MyResume = () => {
  return (
    <section>
      <div className="space-y-4 sm:space-y-8">
        <div>
          <h1 className="main-page-title">Resume</h1>
        </div>

        <div className="space-y-8">
          <Education />

          <Experience />
        </div>
      </div>
    </section>
  );
};

export default MyResume;
