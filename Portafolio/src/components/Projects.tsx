import { useState } from "react";
import "@/styles/projects.css";
import { ProjectsProps } from "../types/common";
import { ImageCarousel } from "./ImageCarousel";

export function Projects({ content, dataProjects }: ProjectsProps) {
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
      <section className="projects" id="projects">
        <h2 className="projects__title">{content.sections.projects.title}</h2>
        <p className="projects__description">
          {content.sections.projects.description}
        </p>
        <article className="projects__cards">
          {dataProjects.map((project, index) => (
            <div className="projects__card" key={index}>
              <div className="projects__image">
                <figure 
                  className="projects__figure"
                  onClick={() => openCarousel(project.images, project.nameProject, 0)}
                >
                  <img
                    src={`${project.image}`}
                    alt={project.nameProject}
                    className="projects__figure--img projects__figure--clickable"
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
