import { BookIcon } from "@/app/icons";
import educationData from "./data/eduData";

const MyContact = () => {
  return (
    <section className="content-card">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-black/50 border border-amber-600 p-1 rounded-md">
          <BookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700 pl-4 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative">
            {/* Bullet */}
            <span className="absolute -left-[25px] top-1 flex items-center justify-center w-4 h-4 rounded-full border-2 border-yellow-400 bg-[#1a1a1a]">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            </span>

            {/* Content */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-yellow-400 font-medium">
                {item.period}
              </p>
              <p className="text-sm sm:text-base text-gray-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyContact;
