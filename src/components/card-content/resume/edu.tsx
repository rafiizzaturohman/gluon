"use client";

import { BookIcon } from "@/app/icons";
import educationData from "@/components/data/eduData";

const Education = () => {
  return (
    <div>
      <div className="space-y-1">
        <div className="flex flex-row gap-2 items-center">
          <div className="resume-icon">
            <BookIcon className="card-icon w-3 h-3 md:w-4 md:h-4" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white tracking-wide font-semibold">
            Education
          </p>
        </div>
      </div>

      <div className="relative space-y-6 border-l-[0.5px] py-3 sm:py-4 ml-3 pl-3 md:pl-4 md:ml-4 border-white/30">
        {educationData.map((eduItem, index) => (
          <div key={index} className="relative">
            <span className="bullet-border">
              <span className="bullet"></span>
            </span>

            <div>
              <h6 className="text-xs sm:text-sm md:text-base">
                {eduItem.title}
              </h6>

              <p className="text-[10px] sm:text-xs md:text-base text-amber-500">
                {eduItem.period}
              </p>

              <p className="text-[10px] sm:text-sm">{eduItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
