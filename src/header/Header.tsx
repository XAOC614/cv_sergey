import React, { useState } from "react";
import styles from "./header.module.scss";
import { NavBar } from "../nav/NavBar";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onBurgerClickHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const onBurgerClickHandler1 = () => {
    setToggle(true);
  };

  return (
    <header className={styles.header}>
      <div onClick={onBurgerClickHandler} className={styles.burger}>
        <div className={styles.lines__wrapper}>
          {!toggle && (
            <>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </>
          )}
          {toggle && (
            <>
              <div
                onClick={onBurgerClickHandler1}
                className={styles.burger__none}
              ></div>
            </>
          )}
        </div>
      </div>
      <NavBar toggle={toggle} />
    </header>
  );
};
