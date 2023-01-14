import React from "react";
import { ProjectType } from "../../App";
import { Project } from "./Project/Project";
import styles from "./Projects.module.scss";
import containerStyles from "../../common/styles/Container.module.scss";
import { Title } from "../../common/title/Title";

type PropsType = {
  projects: ProjectType[];
};

export const Projects: React.FC<PropsType> = ({ projects }) => {
  const dataForTitle = {
    first: "MY",
    second: "PROJECTS",
    extra:
      "a few recent design and coding projects. Want to see more? Email me.",
  };
  const mappedProjects = projects.map((p) => {
    return (
      <Project
        key={p.id}
        img={p.img}
        link={p.link}
        project={p.project}
        tech_stack={p.tech_stack}
      />
    );
  });

  return (
    <section className={styles.projects}>
      <div
        className={`${containerStyles.container} ${styles.projects__container}`}
      >
        <Title dataForTitle={dataForTitle} />
        <div className={styles.projects__wrapper}>{mappedProjects}</div>
      </div>
    </section>
  );
};
