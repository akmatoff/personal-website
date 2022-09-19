export interface Project {
  project_id: number;
  project_title: string;
  project_type: string;
  description: string;
  technology: string;
  repositories: string[];
  picture?: string;
  app?: string;
}