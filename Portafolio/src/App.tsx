import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import "./styles/App.css";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Download } from "./components/Download";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import spanishContent from "./assets/projectContent_es.json";
import englishContent from "./assets/projectContent_en.json";

import dataProjects_es from "./assets/dataProjects_es.json";
import dataProjects_en from "./assets/dataProjects_en.json";
import { Content } from './types/content';
import { ProjectsData } from './types/projects';





function App() {
  const { darkMode, setDarkMode } = useDarkMode();
  const { language, changeLanguage } = useLanguage();

  const content: Content = language === "es" ? spanishContent : englishContent;
  const dataProjects: ProjectsData = language === "es" ? dataProjects_es : dataProjects_en;

  return (
    <main className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
        language={language}
        onLanguageChange={changeLanguage}
        content={content}
      />
      <Presentation content={content} />
      <Download content={content} language={language}/>
      <About content={content} />
      <Experience content={content} />
      <Projects content={content} dataProjects={dataProjects} />
      <Skills content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </main>
  );
}

export default App;
