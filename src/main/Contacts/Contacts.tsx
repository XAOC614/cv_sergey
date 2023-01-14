import React from "react";
import styles from "./Contacts.module.scss";
import inputStyles from "../../common/styles/InputStyles.module.scss";
import containerStyles from "../../common/styles/Container.module.scss";
import { GetInTouch } from "./getInTouch/GetInTouch";
import { Title } from "../../common/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons/faMousePointer";

export const Contacts = () => {
  const dataForTitle = {
    first: "GET",
    second: "IN TOUCH",
    extra: "I’m always open to discussing product design work or partnerships.",
  };
  return (
    <section className={styles.contacts}>
      <div
        className={`${containerStyles.container} ${styles.contacts__container}`}
      >
        <Title dataForTitle={dataForTitle} />
        <div className={styles.info__form__wrapper}>
          <GetInTouch />
          <div className={styles.form__content__wrapper}>
            <p className={styles.contacts__suggestion}>
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <form className={styles.form}>
              <div className={styles.form__inputs__wrapper}>
                <input
                  className={inputStyles.default}
                  type="text"
                  placeholder={"YOUR NAME"}
                />
                <input
                  className={inputStyles.default}
                  type="text"
                  placeholder={"YOUR EMAIL"}
                />
              </div>
              <textarea
                className={inputStyles.defaultTextArea}
                placeholder={"YOUR MESSAGE"}
              ></textarea>
              <button type={"submit"} className={styles.contacts__btn}>
                <FontAwesomeIcon rotate={90} icon={faMousePointer} /> Send
                message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
