import AboutMe from "@/components/about";
import MyPersonal from "@/components/personal";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 px-2 py-4 md:py-20">
      <MyPersonal />

      {/* Right Scrollable Card */}
      <AboutMe />
    </main>
  );
};

export default Home;
