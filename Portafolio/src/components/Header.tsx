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
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
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
    const newMode = !darkMode;
    onDarkModeChange(newMode);
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

  return (
    <header className={visible ? "header-scroll" : "header"}>
      <div className="header__container">
        <figure className="header__logo">
          <a href="#about">
            <img 
              src={darkMode ? "/logojoel-light.png" : "/logojoel-dark.png"} 
              alt="Logo" 
              className="header__logo--img" 
            />
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
        <div className="header__language-dropdown" ref={dropdownRef}>
          <button className="header__button" onClick={toggleLanguageDropdown}>
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
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
