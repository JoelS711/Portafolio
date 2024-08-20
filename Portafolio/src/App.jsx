import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Header } from "./Header.jsx";
import { Presentation } from "./Presentation.jsx";
import { Download } from "./Download.jsx";
import { About } from "./About.jsx";
import { Experience } from "./Experience.jsx";
import { Proyects } from "./Proyects.jsx";
import { Skills } from "./Skills.jsx";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";

import spanishContent from "./assets/projectContent_es.json";
import englishContent from "./assets/projectContent_en.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const storedLanguage = localStorage.getItem("language") || "es";
  const [language, setLanguage] = useState(storedLanguage);

  const content = language === "es" ? spanishContent : englishContent;

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const handleDarkModeChange = (newMode) => {
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <main className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header
        darkMode={darkMode}
        onDarkModeChange={handleDarkModeChange}
        language={language}
        onLanguageChange={handleLanguageChange}
        content={content}
      />
      <Presentation content={content} />
      <Download />
      <About />
      <Experience />
      <Proyects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
