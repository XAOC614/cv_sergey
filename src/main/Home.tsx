import React from 'react';
import styles from './Home.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import {NavLink} from 'react-router-dom';
import homePicture from '../assets/images/about_pic_without_bg.jpg'

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={`${containerStyles.container} ${styles.main__container}`}>
        <div className={styles.text}>
          <h3 className={styles.home__greeting}>HI THERE!</h3>
          <h1 className={styles.home__title}>I am Sergey</h1>
          <p className={styles.home__info}>
            Front-end Developer based in Vitebsk, Belarus. I strive to build
            responsive, and beautiful web applications through carefully crafted
            code and user-centric design.
          </p>
          <div className={styles.home__links_wrapper}>
            <NavLink className={styles.home__link} to="/about">
              More about me
            </NavLink>
            <NavLink
              className={`${styles.home__link} + ' ' + ${styles.home__link_diff}`}
              to="/projects"
            >
              Portfolio
            </NavLink>
          </div>
        </div>
        <div className={styles.photo__wrap}>
          <img className={styles.photo} src={homePicture} alt="My picture" />
        </div>
      </div>
    </div>
  );
};
