import AboutMe from "./about";

const ContentCard = () => {
  return (
    <section className="flex-1 overflow-y-auto">
      <div className="content-card">
        <AboutMe />
      </div>
    </section>
  );
};

export default ContentCard;
