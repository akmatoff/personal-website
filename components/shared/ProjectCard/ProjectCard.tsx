import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { FiGlobe } from "react-icons/fi"; 

import { Project } from "../../../types/data/projects";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className={styles.card + " flex column"}>
      <h1>{project.project_title}</h1>
      <div className={styles.technology}>{project.technology}</div>
      <div className={styles.description}>{project.description}</div>
      {project.picture && (
        <img src={project.picture!} className={styles.picture} />
      )}
      <div className="flex row" style={{justifyContent: 'flex-end', marginTop: '30px'}}>
        {project.app && (
          <Link href={project.app}>
            <a className={styles.icon}>
              <FiGlobe />
            </a>
          </Link>
        )}

        <Link href={project.repositories[0]}>
          <a className={styles.icon}>
            <GrGithub />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
