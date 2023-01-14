import React from "react";
import styles from "./Skills.module.scss";
import { SkillType } from "../../App";
import { Skill } from "./Skill/Skill";

type PropsType = {
  skills: SkillType[];
};

export const Skills: React.FC<PropsType> = ({ skills }) => {
  const mappedSkills = skills.map((s) => {
    return <Skill key={s.id} skill={s.skill} />;
  });
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skill__wrapper}>{mappedSkills}</div>
    </section>
  );
};
