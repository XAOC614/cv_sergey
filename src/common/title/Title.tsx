import React from "react";
import styles from "./title.module.scss";

type PropsType = {
  dataForTitle: {
    first: string;
    second: string;
    extra: string;
  };
};

export const Title: React.FC<PropsType> = ({ dataForTitle }) => {
  return (
    <>
      <h2 className={styles.title}>
        {dataForTitle.first}{" "}
        <span className={styles.title__yellow}>{dataForTitle.second}</span>
      </h2>
      <span className={styles.text}>{dataForTitle.extra}</span>
    </>
  );
};
