"use client";

import Maps from "@/components/card-content/contact/maps";

const MyContact = () => {
  return (
    <section className="space-y-6">
      <h1 className="main-page-title">Contact</h1>

      <Maps />

      <section id="contact-input" className="space-y-6">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row w-full space-x-2">
          <input
            type="text"
            className="border-2 border-amber-500/50 focus:ring-2 focus:ring-amber-600 rounded-lg p-2 h-auto w-full transition-all ease-in-out delay-75 duration-1000"
          />
          <input
            type="text"
            className="border-2 border-amber-500/50 focus:ring-2 focus:ring-amber-600 rounded-lg p-2 h-auto w-full transition-all ease-in-out delay-75 duration-1000"
          />
        </div>

        <div>
          <textarea
            name=""
            id=""
            className="border-2 border-amber-500/50 focus:ring-2 focus:ring-amber-600 rounded-lg p-2 h-48 w-full transition-all ease-in-out delay-75 duration-1000"
          ></textarea>
        </div>
      </section>
    </section>
  );
};

export default MyContact;
