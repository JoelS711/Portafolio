import "@/styles/about.css";
import { ComponentProps } from "../types/common";
import { useReveal } from "../hooks/useReveal";

export function About({ content }: ComponentProps) {
  const sectionRef = useReveal<HTMLElement>();
  const cardsRef = useReveal<HTMLDivElement>(true);

  const cards = [
    {
      img: "/unomas.png",
      alt: "Mas de un anio",
      text: content.sections.about_me.additionalInfo[1],
    },
    {
      img: "/graduation-hat2.png",
      alt: "Graduation",
      text: content.sections.about_me.additionalInfo[2],
    },
    {
      img: "/diploma.png",
      alt: "Diploma",
      text: content.sections.about_me.additionalInfo[3],
    },
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <h2 className="about__title">{content.sections.about_me.title}</h2>
      <p className="about__p">{content.sections.about_me.description}</p>
      <div className="about__cards" ref={cardsRef}>
        {cards.map((card, index) => (
          <figure
            className="about__cards--card"
            key={index}
            style={{ "--stagger-index": index } as React.CSSProperties}
          >
            <span className="about__cards--iconchip">
              <img src={card.img} alt={card.alt} className="about__cards--img" />
            </span>
            <p>{card.text}</p>
          </figure>
        ))}
      </div>
    </section>
  );
}
