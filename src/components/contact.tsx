"use client";

import Maps from "@/components/card-content/contact/maps";

const MyContact = () => {
  return (
    <section className="space-y-6">
      <h1 className="main-page-title">Contact</h1>

      <Maps />

      <section id="contact-input" className="space-y-6">
        <h3 className="capitalize tracking-wide">contact form</h3>

        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row w-full space-x-2">
          <input placeholder="Full name" type="text" className="field-input" />
          <input
            placeholder="Email address"
            type="text"
            className="field-input"
          />
        </div>

        <div>
          <textarea
            name=""
            placeholder="Your message"
            id=""
            className="textarea-input"
          ></textarea>
        </div>
      </section>
    </section>
  );
};

export default MyContact;
