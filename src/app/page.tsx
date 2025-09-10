import AboutMe from "@/components/about";
import NavBar from "@/components/navbar";
import MyPersonal from "@/components/personal";

const Home = () => {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row gap-2 lg:gap-8 
      px-3 sm:px-4 md:px-6 lg:px-10 py-4 pb-14 md:py-10 lg:py-16"
    >
      {/* NavBar */}
      <NavBar />

      {/* Left Fixed Card */}
      <MyPersonal />

      {/* Right Scrollable Card */}
      <AboutMe />
    </main>
  );
};

export default Home;
