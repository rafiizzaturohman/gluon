"use client";

import { PaperPlaneIcon } from "@/app/icons";
import Maps from "@/components/card-content/contact/maps";

const MyContact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const subject = formData.get("subject") as string;

    const email = formData.get("email") as string;

    const message = formData.get("message") as string;

    const body = `Email pengirim: ${email}

Pesan:
${message}
`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=rafiizzaturohman@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="space-y-6">
      <h1 className="main-page-title">Contact</h1>

      <Maps />

      <div id="contact-input" className="space-y-4 sm:space-y-6">
        <h3 className="capitalize tracking-wide text-base font-semibold sm:text-lg md:text-xl">
          contact form
        </h3>

        <form className="space-y-1" onSubmit={handleSubmit}>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row w-full space-x-2">
              <input
                placeholder="Full name - Subject"
                type="text"
                id="subject"
                name="subject"
                className="field-input"
              />

              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="field-input"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message"
                id="message"
                className="textarea-input"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="sendmes-btn">
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
