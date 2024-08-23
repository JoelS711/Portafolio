import "./styles/experience.css";

export function Experience({ content }) {
  return (
    <>
      <section className="separator">
        <div className="separator__line"></div>
      </section>
      <section className="experience" id="experience">
        <h2 className="experience__title">
          {content.sections.experience.title}
        </h2>
        <div className="experience__cards">
          {content.sections.experience.jobs.map((job, index) => (
            <div key={index} className="experience__card">
              <div className="experience__card--titlecontain">
                <h4 className="experience__card--title">{job.date}</h4>
              </div>
              <span className="experience__card--company">{job.company}</span>
              <span className="experience__card--position">{job.position}</span>
              <p className="experience__card--text">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
