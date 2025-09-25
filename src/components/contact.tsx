"use client";

import { PaperPlaneIcon } from "@/app/icons";
import Maps from "@/components/card-content/contact/maps";

const MyContact = () => {
  return (
    <section className="space-y-6">
      <h1 className="main-page-title">Contact</h1>

      <Maps />

      <div id="contact-input" className="space-y-4 sm:space-y-6">
        <h3 className="capitalize tracking-wide text-base font-semibold sm:text-lg md:text-xl">
          contact form
        </h3>

        <form className="space-y-1">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row w-full space-x-2">
              <input
                placeholder="Full name"
                type="text"
                className="field-input"
              />
              <input
                placeholder="Email address"
                type="email"
                className="field-input"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message"
                id=""
                className="textarea-input"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="sendmes-btn">
              <PaperPlaneIcon className="send-icon" />
              <p className="send-text">Send Message</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyContact;
