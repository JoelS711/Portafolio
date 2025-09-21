import "@/styles/about.css";
import { ComponentProps } from "../types/common";

export function About({ content }: ComponentProps) {
  return (
    <section className="about" id="about">
      <h2 className="about__title">{content.sections.about_me.title}</h2>
      <p className="about__p">{content.sections.about_me.description}</p>
      <div className="about__cards">
        <figure className="about__cards--card">
          <img
            src="/unomas.png"
            alt="Mas de un anio"
            className="about__cards--img"
          />
          <p>{content.sections.about_me.additionalInfo[1]}</p>
        </figure>
        <figure className="about__cards--card">
          <img
            src="/graduation-hat2.png"
            alt="Graduation"
            className="about__cards--img"
          />
          <p>{content.sections.about_me.additionalInfo[2]}</p>
        </figure>
        <figure className="about__cards--card">
          <img
            src="/diploma.png"
            alt="Graduation"
            className="about__cards--img"
          />
          <p>{content.sections.about_me.additionalInfo[3]}</p>
        </figure>
      </div>
    </section>
  );
}
