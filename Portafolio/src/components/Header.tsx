import "@/styles/header.css";
import { useState, useEffect, useRef } from "react";
import { HeaderProps } from "../types/common";

export function Header({
  darkMode,
  onDarkModeChange,
  language,
  onLanguageChange,
  content,
}: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ocultar al bajar, mostrar al subir + estado "scrolled" para el glass
  // (throttle con rAF: máximo una actualización de React por frame)
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 12);
        setHidden(currentY > lastY && currentY > 140);
        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: resalta el link de la sección visible
  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Bloquear scroll del body con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Cerrar dropdown de idioma al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    onDarkModeChange(!darkMode);
  };

  const languages = [
    { code: "es", name: "Español", flag: "https://flagsapi.com/ES/shiny/64.png" },
    { code: "en", name: "English", flag: "https://flagsapi.com/GB/shiny/64.png" },
    { code: "pt", name: "Português", flag: "https://flagsapi.com/BR/shiny/64.png" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageSelect = (langCode: "es" | "en" | "pt") => {
    onLanguageChange(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${
          hidden && !isMobileMenuOpen ? "header--hidden" : ""
        }`}
      >
      <div className="header__container">
        <figure className="header__logo">
          <a href="#about" onClick={closeMobileMenu}>
            <img
              src={darkMode ? "/logojoel-light.png" : "/logojoel-dark.png"}
              alt="Logo"
              className="header__logo--img"
            />
          </a>
        </figure>

        <nav className="header__nav">
          <ul className="header__menu">
            {content.header.navbar.map((item) => {
              const sectionId = item.link.replace("#", "");
              return (
                <li className="header__menu-item" key={item.link}>
                  <a
                    href={item.link}
                    className={`header__menu--link ${
                      activeSection === sectionId
                        ? "header__menu--link--active"
                        : ""
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__language-dropdown" ref={dropdownRef}>
            <button
              className="header__button"
              onClick={toggleLanguageDropdown}
              aria-label="Cambiar idioma"
            >
              <img
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                className="header__button--flag"
              />
              <span className="header__button--text">{currentLanguage.name}</span>
              <svg
                className={`header__button--arrow ${isLanguageDropdownOpen ? 'header__button--arrow-open' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 8L2 4h8L6 8z"/>
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div className="header__dropdown-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`header__dropdown-item ${language === lang.code ? 'header__dropdown-item--active' : ''}`}
                    onClick={() => handleLanguageSelect(lang.code as "es" | "en" | "pt")}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="header__dropdown-item--flag"
                    />
                    <span className="header__dropdown-item--text">{lang.name}</span>
                    {language === lang.code && (
                      <svg className="header__dropdown-item--check" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="header__buttons">
            <div className="toggle-switch">
              <label htmlFor="switch" className="toggle">
                <input
                  type="checkbox"
                  className="input"
                  id="switch"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div className="icon icon--moon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                <div className="icon icon--sun">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 001.06 1.06l1.59 1.591z"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
          </div>

          <button
            className={`header__hamburger ${
              isMobileMenuOpen ? "header__hamburger--open" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="header__hamburger--bar"></span>
            <span className="header__hamburger--bar"></span>
            <span className="header__hamburger--bar"></span>
          </button>
        </div>
      </div>
      </header>

      {/* Menú móvil (fuera del header para evitar problemas de containing block) */}
      <div
        className={`header__mobile-backdrop ${
          isMobileMenuOpen ? "header__mobile-backdrop--open" : ""
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <nav
        className={`header__mobile-menu ${
          isMobileMenuOpen ? "header__mobile-menu--open" : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="header__mobile-list">
          {content.header.navbar.map((item, index) => {
            const sectionId = item.link.replace("#", "");
            return (
              <li
                key={item.link}
                className="header__mobile-item"
                style={{ "--stagger-index": index } as React.CSSProperties}
              >
                <a
                  href={item.link}
                  className={`header__mobile-link ${
                    activeSection === sectionId
                      ? "header__mobile-link--active"
                      : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
