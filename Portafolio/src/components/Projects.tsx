import "@/styles/projects.css";
import { ProjectsProps } from "../types/common";

export function Projects({ content, dataProjects }: ProjectsProps) {
  return (
    <>
      <section className="separator">
        <div className="separator__line"></div>
      </section>
      <section className="projects" id="projects">
        <h2 className="projects__title">{content.sections.projects.title}</h2>
        <p className="projects__description">
          {content.sections.projects.description}
        </p>
        <article className="projects__cards">
          {dataProjects.map((project, index) => (
            <div className="projects__card" key={index}>
              <div className="projects__image">
                <figure className="projects__figure">
                  <img
                    src={`/Projects/${project.image}`}
                    alt={project.nameProject}
                    className="projects__figure--img"
                  />
                </figure>
              </div>
              <h3 className="projects__name">{project.nameProject}</h3>
              <div className="projects__icons">
                <figure className="projects__icon">
                  {project.icons.map((icon, indexIcon) => (
                    <img
                      src={`/Icons/${icon.src}`}
                      alt={icon.alt}
                      className={icon.className}
                      key={indexIcon}
                    />
                  ))}
                </figure>
              </div>
              <p className="projects__description--p">{project.description}</p>
              <div className="projects__buttons">
                <button className="projects__button">
                  <a
                    href={project.github}
                    target="_blank"
                    className="projects__button--link"
                  >
                    Github
                  </a>
                </button>
                <button className="projects__button">
                  <a
                    href={project.preview}
                    target="_blank"
                    className="projects__button--link"
                  >
                    Preview
                  </a>
                </button>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
