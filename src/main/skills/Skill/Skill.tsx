import React from "react";
import styles from "./Skill.module.scss";

type PropsType = {
  skill: string;
};

export const Skill: React.FC<PropsType> = ({ skill }) => {
  return (
    <div className={styles.skill}>
      <h3 className={styles.skill__title}>{skill}</h3>
      <div className={styles.progress}></div>
    </div>
  );
};
