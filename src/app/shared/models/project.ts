export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    demoUrl?: string;
    featured?: boolean;
}
