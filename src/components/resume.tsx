import { BookIcon } from "@/app/icons";
import educationData from "./data/eduData";

const MyResume = () => {
  return (
    <section className="content-card">
      <div className="space-y-4 sm:space-y-8">
        <h1 className="main-page-title">Resume</h1>

        <div className="space-y-2 sm:space-y-3">
          <div className="space-y-1">
            <div className="flex flex-row gap-2 items-center">
              <BookIcon className="card-icon w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <h6>Education</h6>
            </div>
          </div>

          <div className="space-y-6 border-l-[0.5px] ml-2 pl-3 md:ml-3 border-white/50">
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
