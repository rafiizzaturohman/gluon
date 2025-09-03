const AboutMe = () => {
  return (
    <section className="flex-1 overflow-y-auto">
      <div
        className="content-card 
        p-3 sm:p-5 md:p-6 lg:p-8 
        space-y-6 shadow-lg w-full rounded-2xl"
      >
        <h1 className="page-title">About Me</h1>

        <div className="space-y-4">
          <p className="card-text">
            I'm a Web Developer from Bandung, Indonesia, with a passion for creating functional, user-friendly, and visually appealing websites. I enjoy learning new things and constantly exploring ways to improve my skills in the ever-evolving tech world.
          </p>

          <p className="card-text">
            In addition to web development, I have practical experience in light computer services, such as reinstalling operating systems, upgrading RAM, and replacing storage devices like HDDs, SSDs, and NVMe drives. My goal is to combine technical expertise with curiosity and creativity to provide solutions that not only work well but also provide real value to users.
          </p>
        </div>

        {/* Contoh konten panjang biar bisa discroll */}
        <div className="space-y-4">
          {[...Array(40)].map((_, i) => (
            <p
              key={i}
              className="card-text text-xs sm:text-sm md:text-base leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              cupiditate quasi maxime, eos ullam velit deserunt aut ipsa
              recusandae itaque optio at beatae iure quibusdam. Facilis expedita
              saepe dolorem eius. {i + 1}.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
