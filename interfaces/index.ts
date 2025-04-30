export interface Project {
    title: string;
    details: string;
    image?: string;
    tech: string[];
    live?: string;
    github?: string;
}


export interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}