"use client";

import WhatIDo from "./card-content/about/whatido";

const AboutMe = () => {
  return (
    <section className="flex-1 overflow-y-auto">
      <div className="content-card">
        <div className="space-y-3">
          <h1 className="main-page-title">About Me</h1>

          <div className="space-y-4">
            <article className="card-text">
              I&apos;m a Web Developer from Bandung, Indonesia, with a passion
              for creating functional, user-friendly, and visually appealing
              websites. I enjoy learning new things and constantly exploring
              ways to improve my skills in the ever-evolving tech world.
            </article>

            <article className="card-text">
              In addition to web development, I have practical experience in
              light computer services, such as reinstalling operating systems,
              upgrading RAM, and replacing storage devices like HDDs, SSDs, and
              NVMe drives. My goal is to combine technical expertise with
              curiosity and creativity to provide solutions that not only work
              well but also provide real value to users.
            </article>
          </div>
        </div>

        <WhatIDo />

        <div></div>
      </div>
    </section>
  );
};

export default AboutMe;
