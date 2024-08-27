import "./styles/header.css";
import React, { useState, useEffect } from "react";

export function Header({
  darkMode,
  onDarkModeChange,
  language,
  onLanguageChange,
  content,
}) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const storedLanguage = localStorage.getItem("language") || "es";

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

  const changeLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    onLanguageChange(newLanguage);
  };

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
                {content.header.navbar[0].text}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#experience" className="header__menu--link">
                {content.header.navbar[1].text}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#projects" className="header__menu--link">
                {content.header.navbar[2].text}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#skills" className="header__menu--link">
                {content.header.navbar[3].text}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#contact" className="header__menu--link">
                {content.header.navbar[4].text}
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button" onClick={changeLanguage}>
          <img
            src={
              language === "es"
                ? "https://flagsapi.com/US/shiny/64.png"
                : "https://flagsapi.com/ES/shiny/64.png"
            }
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
