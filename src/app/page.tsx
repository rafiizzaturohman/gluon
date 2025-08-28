import MyPersonal from "@/components/personal";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row gap-2 md:gap-6 px-6 py-4 md:py-20">
      <MyPersonal />

      {/* Right Scrollable Card */}
      <section className="flex-1 overflow-y-auto">
        <div className="content-card p-6 space-y-6 shadow-lg w-auto">
          <h1 className="text-3xl font-extrabold flex items-center gap-2">
            Dark Warm Theme <span>🌙</span>
          </h1>
          <p className="card-text">
            This portfolio runs with a dark theme only.
          </p>

          <hr />

          {/* Contoh konten panjang biar bisa discroll */}
          <div className="space-y-4">
            {[...Array(40)].map((_, i) => (
              <p key={i} className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita cupiditate quasi maxime, eos ullam velit deserunt aut
                ipsa recusandae itaque optio at beatae iure quibusdam. Facilis
                expedita saepe dolorem eius. {i + 1}.
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
