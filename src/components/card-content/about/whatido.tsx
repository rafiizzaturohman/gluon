import { iDo } from "@/components/data/iDo";

const WhatIDo = () => {
  return (
    <div className="space-y-3">
      <h1 className="page-title">What I&apos;m Doing</h1>

      {/* What I Do Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {iDo.map((item, index) => (
          <div className="mini-card" key={index}>
            <item.icon className="mini-card-icon" />

            <h6 className="text-center font-semibold">{item.label}</h6>

            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
