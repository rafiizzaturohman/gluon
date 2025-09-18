import Education from "./card-content/resume/edu";
import Experience from "./card-content/resume/exp";

const MyResume = () => {
  return (
    <section className="content-card">
      <div className="space-y-4 sm:space-y-8">
        <h1 className="main-page-title">Resume</h1>

        <div className="space-y-8">
          <Education />

          <Experience />
        </div>
      </div>
    </section>
  );
};

export default MyResume;
