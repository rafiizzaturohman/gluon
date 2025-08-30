const AboutMe = () => {
  return (
    <section className="flex-1 overflow-y-auto">
      <div
        className="content-card 
        p-3 sm:p-5 md:p-6 lg:p-8 
        space-y-6 shadow-lg w-full rounded-2xl"
      >
        <h1 className="page-title">
          About Me
        </h1>

        <p className="card-text text-xs sm:text-sm md:text-base">
          This portfolio runs with a dark theme only.
        </p>

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
