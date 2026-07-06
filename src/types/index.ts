export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

export interface InternshipContribution {
  id: string;
  product: string;
  type: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface QuickInfo {
  label: string;
  value: string;
}

export type AnimationVariant = {
  hidden: Record<string, number | string>;
  visible: Record<string, number | string | object>;
};
