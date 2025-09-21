export interface ProjectIcon {
    src: string;
    alt: string;
    className: string;
  }
  
  export interface Project {
    image: string;
    nameProject: string;
    icons: ProjectIcon[];
    description: string;
    github: string;
    preview: string;
  }
  
  export type ProjectsData = Project[];