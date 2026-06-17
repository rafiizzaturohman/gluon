"use client";

import { useState } from "react";
import { PaperPlaneIcon } from "@/app/icons";
import Maps from "@/components/card-content/contact/maps";

const MyContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const subject = String(formData.get("subject") ?? "");

    const name = String(formData.get("name") ?? "");

    const email = String(formData.get("email") ?? "");

    const message = String(formData.get("message") ?? "");

    const body = `Email pengirim: ${email}
Nama pengirim: ${name}

Pesan:
${message}
`;

    if (!subject.trim() || !name.trim() || !email.trim() || !message.trim()) {
      setModalMessage("Please fill all fields.");
      setIsModalOpen(true);
      return;
    }

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=rafiizzaturohman@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = gmailUrl;
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-orange-500/40 bg-[#161412] shadow-[0_0_25px_rgba(249,115,22,0.15)]">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold text-white">Notification</h2>
            </div>

            <div className="px-6 py-5">
              <p className="text-neutral-300 leading-relaxed">{modalMessage}</p>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="modalAlert-btn"
              >
                <p className="send-text">Ok</p>
              </button>
            </div>
          </div>
        </div>
      )}

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
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  className="field-input"
                />

                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="field-input"
                />
              </div>

              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                className="field-input"
              />

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
    </>
  );
};

export default MyContact;
