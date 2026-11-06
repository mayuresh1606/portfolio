export interface Project {
  title: string;
  category: string;
  description: string;
  details: string;
  architectureFlow: string;
  metrics: string;
  tech: string[];
  live?: string;
  github?: string;
  impact: string[];
}

export interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}
