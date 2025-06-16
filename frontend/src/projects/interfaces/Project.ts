import type { ProjectCategory } from "./ProjectCategory";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  details: string;
  category: ProjectCategory;
}
