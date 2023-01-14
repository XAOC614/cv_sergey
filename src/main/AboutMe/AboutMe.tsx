import React from "react";
import {Skills} from "../skills/Skills";
import {SkillType} from "../../App";
import styles from "./aboutMe.module.scss";
import {InfoListAboutMe} from "./InfoListAboutMe/InfoListAboutMe";
import {EducationList} from "./Education/EducationList";
import containerStyles from "../../common/styles/Container.module.scss";
import {Title} from "../../common/title/Title";
import myPic from "../../assets/images/photo.jpg";

type PropsType = {
    skills: SkillType[];
};
export const AboutMe: React.FC<PropsType> = ({skills}) => {
    const personalInfo = [
        {id: 1, field: "First Name", data: "Sergey"},
        {id: 2, field: "Last Name", data: "Fomin"},
        {id: 3, field: "Birthdate", data: "14 Oktober 1991"},
        {id: 4, field: "Nationality", data: "Belarus"},
        {id: 5, field: "Experience", data: "1 year"},
        {id: 6, field: "Address", data: "Vitebsk"},
    ];
    const otherInfo = [
        {id: 1, field: "Freelance", data: "Available"},
        {
            id: 2,
            field: "Languages",
            data: "English - intermediate, Belorussian/Russian - native",
        },
        {id: 3, field: "Phone", data: "+375 33 3453593"},
        {id: 4, field: "Email", data: "xaoc615@gmail.com"},
        {id: 5, field: "Telegram", data: "@XAOC614"},
        {
            id: 6,
            field: "Linkedin",
            data: "https://www.linkedin.com/in/sergey-fomin-009305262/",
        },
    ];
    const education = [
        {
            id: 1,
            data: " Feb 2009 - Feb 2014",
            title: "Bachelor Degree",
            org: "VSU named after P.M. Masherov",
            desc: "Field of study physicist-engineer",
        },
        {
            id: 2,
            data: "Jan 2015 - July 2015",
            title: "Language Certificate",
            org: "Streamline",
            desc: "English language proficiency intermediate",
        },
        {
            id: 3,
            data: "April 2022 - August 2022",
            title: "Certificate",
            org: "Freecodecamp",
            desc: "Front-end for beginners",
        },
        {
            id: 4,
            data: "August 2022 - January 2023",
            title: "training",
            org: "it-incubator",
            desc: "Front-end ",
        },
    ];

    const experience = [
        {
            id: 1,
            data: " Jan 2022 - Dec 2022",
            title: "Front-end Developer",
            org: "freelance",
            desc: "Successfully completed several landing pages jobs with great feedback from clients. " +
                "Worked on several internet shops, created user-friendly interfaces, registration and login forms " +
                "authorization flow with jwt tokens. Identified, diagnosed and fixed SPA problems, including adaptability " +
                "and performance issues"
        },

    ];
    const dataForTitle = {
        first: "ABOUT",
        second: "ME",
        extra: "I design and code beautiful things, and I love what I do.",
    };
    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMe__title_text}>
                <Title dataForTitle={dataForTitle}/>
            </div>

            <div className={styles.aboutMe__personal_info}>
                <div className={styles.aboutMe__personal_info__bordered}>
                    <div className={styles.personal_info__img__wrapper}>
                        <img
                            className={styles.personal_info__img}
                            src={myPic}
                            alt="My photo"
                        />
                    </div>
                </div>
                <div className={styles.personal_info__wrapper}>
                    <div className={styles.personal_info__extended}>
                        <InfoListAboutMe data={personalInfo}/>
                        <InfoListAboutMe data={otherInfo}/>
                    </div>
                    <div className={styles.personal_info__extended__link}>
                        <a
                            href="https://github.com/XAOC614"
                            target="_blank"
                        >
                            {" "}
                            DOWNLOAD MY CV
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={`${containerStyles.container} ${styles.aboutMe__container}`}
            >
                <hr style={{margin: "30px 0 50px"}}/>
                <div className={styles.personal_info__extended}>
                    <EducationList title={'Work Experience'} data={experience}/>
                    <hr className={styles.separator} style={{margin: "30px 0 50px"}}/>
                    <EducationList title={'Education'} data={education}/>
                </div>
                <hr style={{margin: "30px 0 50px"}}/>
                <Skills skills={skills}/>
            </div>
        </section>
    );
};
