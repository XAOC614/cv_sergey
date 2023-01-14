import React from "react";
import { Header } from "./header/Header";
import { Home } from "./main/Home";
import { v1 } from "uuid";
import { Projects } from "./main/Projects/Projects";
import { Contacts } from "./main/Contacts/Contacts";
import { AboutMe } from "./main/AboutMe/AboutMe";
import { Route, Routes } from "react-router";

export type SkillType = {
  id: string;
  skill: string;
};

export type ProjectType = {
  id: string;
  project: string;
  img: string;
  link: string;
  tech_stack: string[];
};
const App = () => {
  const state = {
    skills: [
      {
        id: v1(),
        skill: "React",
      },
      {
        id: v1(),
        skill: "JS",
      },
      {
        id: v1(),
        skill: "HTML",
      },
      {
        id: v1(),
        skill: "CSS/SCSS",
      },
      {
        id: v1(),
        skill: "TypeScript",
      },
      {
        id: v1(),
        skill: "Redux/Redux Toolkit",
      },
      {
        id: v1(),
        skill: "StoryBook/Jest",
      },
      {
        id: v1(),
        skill: "Material UI/Ant Design",
      },
      {
        id: v1(),
        skill: "RTK Query",
      },
      {
        id: v1(),
        skill: "Formik/yup",
      },
      {
        id: v1(),
        skill: "React hook form",
      },
      {
        id: v1(),
        skill: "Rest api",
      },
    ],
    projects: [
      {
        id: v1(),
        img: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png",
        link: "https://github.com/XAOC614/samurai-way-main",
        project: "Social-network",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        img: "https://assets-global.website-files.com/619cef5c40cb8925cd33ece3/621e3d842f5305af9170e4eb_619cef5c40cb8963c133f5fc_6076f40a7bc433d96f4663f4_template-vignette-TO-DO-LIST-1200x900.png",
        project: "TodoList",
        link: "https://github.com/XAOC614/it-incubator-todolist-ts-01",
        tech_stack: ["React", "Redux", "Typescript", "Storybook"],
      },
      {
        id: v1(),
        img: "https://m-dekor.by/catalog/4132/main.webp",
        project: "Battleship",
        link: "https://github.com/XAOC614/BattleShip",
        tech_stack: ["JS", "HTML", "CSS"],
      },
      {
        id: v1(),
        img: "https://cdn-icons-png.flaticon.com/512/3291/3291667.png",
        link: "https://github.com/XAOC614?tab=repositories",
        project: "Github repos list",
        tech_stack: ["Typescript", "Tailwind", "React", "RTK/ RTK Query"],
      },
    ],
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<AboutMe skills={state.skills} />} />
          <Route
            path={"/projects"}
            element={<Projects projects={state.projects} />}
          />
          <Route path={"/contacts"} element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
