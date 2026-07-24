import { useState } from "react";
import "@/styles/projects.css";
import { ProjectsProps } from "../types/common";
import { ImageCarousel } from "./ImageCarousel";
import { useReveal } from "../hooks/useReveal";

export function Projects({ content, dataProjects }: ProjectsProps) {
  const sectionRef = useReveal<HTMLElement>();
  const cardsRef = useReveal<HTMLElement>(true);

  const [carouselState, setCarouselState] = useState({
    isOpen: false,
    images: [] as string[],
    projectName: "",
    initialIndex: 0,
  });

  const openCarousel = (images: string[], projectName: string, initialIndex: number = 0) => {
    setCarouselState({
      isOpen: true,
      images,
      projectName,
      initialIndex,
    });
  };

  const closeCarousel = () => {
    setCarouselState({
      isOpen: false,
      images: [],
      projectName: "",
      initialIndex: 0,
    });
  };

  return (
    <>
      <section className="separator">
        <div className="separator__line"></div>
      </section>
      <section className="projects" id="projects" ref={sectionRef}>
        <h2 className="projects__title">{content.sections.projects.title}</h2>
        <p className="projects__description">
          {content.sections.projects.description}
        </p>
        <article className="projects__cards" ref={cardsRef}>
          {dataProjects.map((project, index) => (
            <div
              className="projects__card"
              key={index}
              style={{ "--stagger-index": index } as React.CSSProperties}
            >
              <figure
                className="projects__figure"
                onClick={() => openCarousel(project.images, project.nameProject, 0)}
              >
                <img
                  src={`${project.image}`}
                  alt={project.nameProject}
                  className="projects__figure--img"
                />
                <span className="projects__figure--overlay" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="34"
                    height="34"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </figure>
              <div className="projects__body">
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
              </div>
            </div>
          ))}
        </article>
      </section>

      {/* Image Carousel Modal */}
      <ImageCarousel
        images={carouselState.images}
        projectName={carouselState.projectName}
        isOpen={carouselState.isOpen}
        onClose={closeCarousel}
        initialIndex={carouselState.initialIndex}
      />
    </>
  );
}
