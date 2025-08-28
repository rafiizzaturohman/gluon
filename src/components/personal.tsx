"use client";

import Image from "next/image";
import MyPict from "../../public/image/mypict.png";
import {
  CakeIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const profileInfo = [
  {
    label: "email",
    value: "rafiizzaturohman@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    label: "phone",
    value: "+62 896-4634-3783",
    icon: PhoneIcon,
  },
  {
    label: "birthday",
    value: "May 14, 2004",
    icon: CakeIcon,
  },
  {
    label: "location",
    value: "Bandung, Indonesia",
    icon: MapPinIcon,
  },
];

const MyPersonal = () => {
  return (
    <aside className="w-auto md:w-1/4">
      <div className="relative profile-card md:fixed p-6 md:px-8 md:py-16 shadow-lg space-y-2">
        <div className="flex flex-row md:flex-col gap-4 md:gap-8 items-center md:text-center">
          <div className="profile-image">
            <Image
              src={MyPict}
              alt="Profile picture"
              fill // automatically fills the parent div
              priority
            />
          </div>

          <div className="space-y-0.5 md:space-y-1.5">
            <h2 className="card-title text-base md:text-lg md:text-center">
              Rafi Izzaturohman
            </h2>

            <p className="card-title-text">Web Developer</p>
          </div>
        </div>

        <hr className="opacity-20 hidden md:block md:my-10" />

        {/* Profile Information */}
        <div className="space-y-4 md:space-y-10">
          {profileInfo.map((item, index) => (
            <div key={index} className="flex flex-row gap-4 items-center">
              <div className="card-border">
                <item.icon className="card-icon w-4 md:w-6 h-4 md:h-6" />
              </div>
              <div className="space-y-0.5">
                <p className="uppercase text-[10px] md:text-xs tracking-wider">
                  {item.label}
                </p>
                <p className="text-white text-xs md:text-sm tracking-wide">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MyPersonal;
