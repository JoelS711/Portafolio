import "./styles/proyects.css";

export function Proyects({ content, dataProjects }) {
  return (
    <>
      <section className="separator">
        <div className="separator__line"></div>
      </section>
      <section className="proyects" id="proyects">
        <h2 className="proyects__title">{content.sections.projects.title}</h2>
        <p className="proyects__description">
          {content.sections.projects.description}
        </p>
        <article className="proyects__cards">
          {dataProjects.map((proyect, index) => (
            <div className="proyects__card" key={index}>
              <div className="proyects__image">
                <figure className="proyects__figure">
                  <img
                    src={`/Proyects/${proyect.image}`}
                    alt={proyect.nameProyect}
                    className="proyects__figure--img"
                  />
                </figure>
              </div>
              <h3 className="proyects__name">{proyect.nameProyect}</h3>
              <div className="proyects__icons">
                <figure className="proyects__icon">
                  {proyect.icons.map((icon, indexIcon) => (
                    <img
                      src={`/Icons/${icon.src}`}
                      alt={icon.alt}
                      className={icon.className}
                      key={indexIcon}
                    />
                  ))}
                </figure>
              </div>
              <p className="proyects__description--p">{proyect.description}</p>
              <div className="proyects__buttons">
                <button className="proyects__button">
                  <a
                    href={proyect.github}
                    target="_blank"
                    className="proyects__button--link"
                  >
                    Github
                  </a>
                </button>
                <button className="proyects__button">
                  <a
                    href={proyect.preview}
                    target="_blank"
                    className="proyects__button--link"
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
