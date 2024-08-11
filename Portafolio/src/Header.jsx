import "./styles/header.css";
import React, { useState, useEffect } from "react";

export function Header({ darkMode, onDarkModeChange }) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    onDarkModeChange(newMode);
  };

  /**/
  return (
    <header className={visible ? "header-scroll" : "header"}>
      <div className="header__container">
        <figure className="header__logo">
          <a href="#about">
            <img src="/logo.png" alt="Logo" className="header__logo--img" />
          </a>
        </figure>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#about" className="header__menu--link">
                Acerca de mi
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#experience" className="header__menu--link">
                Experiencia
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#proyects" className="header__menu--link">
                Proyectos
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#skills" className="header__menu--link">
                Habilidades
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#contact" className="header__menu--link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button">
          <img
            src="https://flagsapi.com/GB/shiny/64.png"
            alt="language"
            className="header__button--flag"
          />
        </button>
        <div className="header__buttons">
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
