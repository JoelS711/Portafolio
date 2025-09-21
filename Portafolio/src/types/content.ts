export interface NavItem {
    text: string;
    link: string;
  }
  
  export interface HeaderContent {
    navbar: NavItem[];
  }
  
  export interface PresentationContent {
    title: string;
    description: string;
  }
  
  export interface ButtonContent {
    download_cv: string;
  }
  
  export interface AboutMeContent {
    title: string;
    description: string;
    additionalInfo: {
      [key: string]: string;
    };
  }
  
  export interface JobExperience {
    date: string;
    company: string;
    position: string;
    description: string;
  }
  
  export interface ExperienceContent {
    title: string;
    jobs: JobExperience[];
  }
  
  export interface ProjectsContent {
    title: string;
    description: string;
  }
  
  export interface SkillsContent {
    title: string;
  }
  
  export interface ContactContent {
    title: string;
    description: string;
  }
  
  export interface FooterContent {
    navbar: NavItem[];
    copyright: string;
  }
  
  export interface SectionsContent {
    about_me: AboutMeContent;
    experience: ExperienceContent;
    projects: ProjectsContent;
    skills: SkillsContent;
    contact: ContactContent;
  }
  
  export interface Content {
    header: HeaderContent;
    presentation: PresentationContent;
    button_cv: ButtonContent;
    sections: SectionsContent;
    footer: FooterContent;
  }