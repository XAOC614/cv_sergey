import React from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

type PropsType = {
  toggle: boolean;
};

export const NavBar: React.FC<PropsType> = ({ toggle }) => {
  const navBarClassName = !toggle
    ? styles.header__nav_closed
    : styles.header__nav_open;
  return (
    <nav className={navBarClassName}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__nav__list_item}>
          <NavLink
            end
            className={(isActive) =>
              isActive.isActive ? styles.active : styles.header__nav__link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink
            end
            className={(isActive) =>
              isActive.isActive ? styles.active : styles.header__nav__link
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink
            end
            className={(isActive) =>
              isActive.isActive ? styles.active : styles.header__nav__link
            }
            to="/projects"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={styles.header__nav__list_item}>
          <NavLink
            end
            className={(isActive) =>
              isActive.isActive ? styles.active : styles.header__nav__link
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
