import "./styles/footer.css";

export function Footer({ content }) {
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
            {content.footer.navbar[0].text}
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#experience" className="footer__menu--link">
            {content.footer.navbar[1].text}
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#projects" className="footer__menu--link">
            {content.footer.navbar[2].text}
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#skills" className="footer__menu--link">
            {content.footer.navbar[3].text}
          </a>
        </li>
        <li className="footer__menu-item">
          <a href="#contact" className="footer__menu--link">
            {content.footer.navbar[4].text}
          </a>
        </li>
      </ul>
      <p className="footer__p">{content.footer.copyright}</p>
    </section>
  );
}
