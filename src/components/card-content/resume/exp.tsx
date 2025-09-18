import { BookIcon } from "@/app/icons";
import experienceData from "@/components/data/expData";

const Experience = () => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="space-y-1">
        <div className="flex flex-row gap-2 items-center">
          <div className="resume-icon">
            <BookIcon className="card-icon w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white tracking-wide font-semibold">
            Experience
          </p>
        </div>
      </div>

      <div className="relative space-y-6 border-l-[0.5px] ml-3 pl-3 md:pl-4 md:ml-4 border-white/30">
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
