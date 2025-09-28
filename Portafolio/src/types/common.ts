export type Language = 'es' | 'en' | 'pt';

export interface ComponentProps {
  content: import('./content').Content;
}

export interface ProjectsProps extends ComponentProps {
  dataProjects: import('./projects').ProjectsData;
}

export interface DownloadProps extends ComponentProps {
  language: Language;
}

export interface HeaderProps {
  darkMode: boolean;
  onDarkModeChange: (newMode: boolean) => void;
  language: Language;
  onLanguageChange: (newLanguage: Language) => void;
  content: import('./content').Content;
}