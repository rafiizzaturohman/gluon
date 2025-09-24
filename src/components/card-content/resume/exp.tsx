"use client";

import { BookIcon } from "@/app/icons";
import experienceData from "@/components/data/expData";

const Experience = () => {
  return (
    <div>
      <div className="space-y-1">
        <div className="flex flex-row gap-2 items-center">
          <div className="resume-icon">
            <BookIcon className="card-icon w-3 h-3 md:w-4 md:h-4" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white tracking-wide font-semibold">
            Experience
          </p>
        </div>
      </div>

      <div className="relative space-y-6 border-l-[0.5px] py-3 sm:py-4 ml-[11.5px] pl-3 md:pl-4 md:ml-[14px] border-white/30">
        {experienceData.map((expItem, index) => (
          <div key={index} className="relative">
            <span className="bullet-border">
              <span className="bullet"></span>
            </span>

            <div className="capitalize">
              <h6 className="text-xs sm:text-sm md:text-base">
                {expItem.title}
              </h6>

              <p className="text-[10px] sm:text-xs md:text-base text-amber-500">
                {expItem.period}
              </p>

              <p className="text-[10px] sm:text-sm">{expItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
