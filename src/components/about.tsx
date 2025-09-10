import { WebDevIcon, CameraIcon } from "@/app/icons";

const AboutMe = () => {
  return (
    <section className="flex-1 overflow-y-auto">
      <div
        className="content-card 
        p-3 sm:p-5 md:p-6 lg:p-8 
        space-y-6 shadow-lg w-full rounded-2xl"
      >
        <div className="space-y-3">
          <h1 className="main-page-title">About Me</h1>

          <div className="space-y-4">
            <p className="card-text">
              I&apos;m a Web Developer from Bandung, Indonesia, with a passion
              for creating functional, user-friendly, and visually appealing
              websites. I enjoy learning new things and constantly exploring
              ways to improve my skills in the ever-evolving tech world.
            </p>

            <p className="card-text">
              In addition to web development, I have practical experience in
              light computer services, such as reinstalling operating systems,
              upgrading RAM, and replacing storage devices like HDDs, SSDs, and
              NVMe drives. My goal is to combine technical expertise with
              curiosity and creativity to provide solutions that not only work
              well but also provide real value to users.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="page-title">What I&apos;m Doing</h1>

          {/* What I Do Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mini-card">
              <WebDevIcon className="mini-card-icon" />

              <h6 className="text-center font-semibold">Web Development</h6>

              <p className="card-text">
                I create responsive and user-friendly websites with clean code
                and modern design, ensuring great performance on all devices.
              </p>
            </div>

            <div className="mini-card">
              <CameraIcon className="mini-card-icon" />

              <h6 className="text-center font-semibold">Photography</h6>

              <p className="card-text">
                I capture moments with creativity and precision, delivering
                high-quality photographs that reflect stories, emotions, and
                timeless memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
