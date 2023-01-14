import React from "react";
import styles from "./Project.module.scss";

type PropsType = {
  project: string;
  img: string;
  link: string;
  tech_stack: string[];
};

export const Project: React.FC<PropsType> = ({
  project,
  tech_stack,
  img,
  link,
}) => {
  const mappedTechStack = tech_stack.map((ts) => ts + " ");
  return (
    <figure className={styles.project}>
      <img
        src={img}
        alt={"Project related picture"}
        className={styles.project__pic}
      />
      <figcaption className={styles.project__title}>
        {project}
        <p className={styles.tech__stack}>{mappedTechStack}</p>
      </figcaption>
      <a href={link} className={styles.project__link} target="_blank"></a>
    </figure>
  );
};
