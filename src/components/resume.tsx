import { BookIcon } from "@/app/icons";
import educationData from "./data/eduData";

const MyResume = () => {
  return (
    <section className="content-card">
      <div className="space-y-4 sm:space-y-8">
        <h1 className="main-page-title">Resume</h1>

        <div className="space-y-6 sm:space-y-3">
          <div className="space-y-1">
            <div className="flex flex-row gap-3 items-center">
              <div className="border border-amber-400 p-1.5 shadow-xs shadow-white rounded-lg">
                <BookIcon className="card-icon w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-base text-white tracking-wide font-semibold">
                Education
              </p>
            </div>
          </div>

          <div className="space-y-6 border-l-[0.5px] ml-3 pl-3 md:ml-4 border-white/50">
            {educationData.map((eduItem, index) => (
              <div key={index}>
                <h6 className="text-sm">{eduItem.title}</h6>
                <p className="text-xs text-amber-500">{eduItem.period}</p>
                <p className="text-[10px] sm:text-sm">{eduItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1"></div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
