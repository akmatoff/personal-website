import { Project } from "../../../types/data/projects";
import ProjectCard from "../../shared/ProjectCard/ProjectCard";
import Section from "../../shared/Section/Section";

import styles from "./Work.module.css";

type Props = {
  projects: Project[];
};

function Work({ projects }: Props) {
  return (
    <Section id="work">
      <div className={styles['projects-container']}>
        {projects.map((project: Project) => (
          <ProjectCard key={project.project_id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Work;
