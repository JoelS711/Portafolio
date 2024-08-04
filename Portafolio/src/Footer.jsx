import "./styles/footer.css";

export function Footer() {
  return (
    <section className="footer">
      <figure className="footer__icons">
        <a
          href="https://www.youtube.com/@joels3356"
          target="_blank"
          className="footer__icons--icon"
        >
          <img
            src="/SocialMedia/youtube.png"
            alt="YouTube Logo"
            className="footer__icons--logo"
          />
        </a>
        <a
          href="mailto:joelsanabria11@gmail.com"
          target="_blank"
          className="footer__icons--icon"
        >
          <img
            src="/SocialMedia/mail.png"
            alt="Mail Logo"
            className="footer__icons--logo"
          />
        </a>
        <a
          href="https://github.com/JoelS711"
          target="_blank"
          className="footer__icons--icon"
        >
          <img
            src="/SocialMedia/github.png"
            alt="Github Logo"
            className="footer__icons--logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/emanuelgelvez/"
          target="_blank"
          className="footer__icons--icon"
        >
          <img
            src="/SocialMedia/linkedln.png"
            alt="Linkedln Logo"
            className="footer__icons--logo"
          />
        </a>
      </figure>
      <ul className="footer__menu">
        <li className="footer__menu-item">
          <a href="#about" className="footer__menu--link">
            Acerca de mi
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#experience" className="footer__menu--link">
            Experiencia
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#proyects" className="footer__menu--link">
            Proyectos
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#skills" className="footer__menu--link">
            Habilidades
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#contact" className="footer__menu--link">
            Contacto
          </a>
        </li>
      </ul>
      <p className="footer__p">
        &copy; 2024 JoelS. Algunos derechos reservados.
      </p>
    </section>
  );
}
