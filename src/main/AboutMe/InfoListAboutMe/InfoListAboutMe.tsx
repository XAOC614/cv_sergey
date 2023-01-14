import React from "react";
import styles from "./infoTable.module.scss";

type PropsType = {
  data: {
    id: number;
    field: string;
    data: string;
  }[];
};

export const InfoListAboutMe: React.FC<PropsType> = ({ data }) => {
  const mappedListItem = data.map((row) => {
    return (
      <div key={row.id} className={styles.infoList__item}>
        <span className={styles.infoList__text}>{row.field}</span>
        <h6 className={styles.infoList__personal}>{row.data}</h6>
      </div>
    );
  });
  return <ul className={styles.infoList}>{mappedListItem}</ul>;
};
