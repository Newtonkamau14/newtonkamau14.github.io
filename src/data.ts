import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import typescript from "./assets/typescript.svg";
import nodejs from "./assets/nodejs.svg";
import mysql from "./assets/mysql.svg";
import mongodb from "./assets/mongodb.svg";
import github from "./assets/github3.svg";
import linkedin from "./assets/linkedin.svg";
import kenyaopendata from "./assets/kenyaopendata.png";
import expresstsmysql from "./assets/express-ts-mysql.png";

const projects = [
  {
    id: 1,
    img: kenyaopendata,
    imgAltText: "kenya open data screenshot",
    projectLink: "https://newtonkamau14.github.io/Kenya-Open-Data/",
    title: "Kenya Open Data",
    description:
      "It is an API that gives detailed information about each county, including population, size, leadership, and capital city.Also has data of constituencies.",
  },
  {
    id: 2,
    img: expresstsmysql,
    imgAltText: "express ts mysql cli",
    projectLink: "https://github.com/Newtonkamau14/express-ts-mysql-cli",
    title: "express-ts-mysql-cli",
    description:
      "A CLI app to scaffold an Express application with MySQL,Typescript and Sequelize as the ORM.",
  },
];

const skills = [
  {
    id: 1,
    img: react,
    imgAltText: "react",
  },
  {
    id: 2,
    img: html,
    imgAltText: "html",
  },
  {
    id: 3,
    img: css,
    imgAltText: "css",
  },
  {
    id: 4,
    img: js,
    imgAltText: "javascript",
  },
  {
    id: 5,
    img: typescript,
    imgAltText: "typescript",
  },
  {
    id: 6,
    img: nodejs,
    imgAltText: "nodejs",
  },
  {
    id: 7,
    img: mysql,
    imgAltText: "mysql",
  },
  {
    id: 8,
    img: mongodb,
    imgAltText: "mongodb",
  },
];

const contacts = [
  {
    id: 1,
    contactLink: "https://github.com/Newtonkamau14",
    contactImg: github,
    contactImgAltText: "github account link",
  },
  {
    id: 2,
    contactLink: "https://www.linkedin.com/",
    contactImg: linkedin,
    contactImgAltText: "linkedin account link",
  },
];

export { skills, projects, contacts };
