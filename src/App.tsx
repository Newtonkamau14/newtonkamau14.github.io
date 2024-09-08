import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import typescript from "./assets/typescript.svg";
import nodejs from "./assets/nodejs.svg";
import mysql from "./assets/mysql.svg";
import mongodb from "./assets/mongodb.svg";
import expresssql from "./assets/expresssql.png";
import fakerapi from "./assets/expresssql.png";
import todoapp from "./assets/todoapp.png";
import github from "./assets/github3.svg";
import linkedin from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div id="intro">
          <h1>Hi there!</h1>
          <p>
            As a seasoned full-stack developer, I bring a wealth of expertise in
            React, HTML, CSS, and JavaScript, coupled with proficiency in
            database management using MySQL and MongoDB. My robust skill set
            extends to server-side technologies, encompassing Node.js and
            Express. With a keen eye for front-end design and a mastery of
            back-end frameworks, I am adept at crafting seamless and dynamic web
            applications.I am enthusiastic about contributing my multifaceted
            skills to elevate your development team and drive innovative
            projects forward.
          </p>
        </div>
        <div id="skills">
          <h1 className="div-title">Skills:</h1>
          <img src={react} alt="react" />
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="javascript" />
          <img src={typescript} alt="typescript" />
          <img src={nodejs} alt="nodejs" />
          <img src={mysql} alt="mysql" />
          <img src={mongodb} alt="mongodb" />
        </div>

        <h1 className="div-title">Projects:</h1>

        <div className="projects" id="projects">
          <div className="card">
            <img src={todoapp} alt="todo app screenshot" />
            <a href="https://todoapp-375619.ue.r.appspot.com/">
              <h3>Todo App</h3>
            </a>
            <p>
              A todo app built using express,mongodb and deployed on Google's
              App Engine
            </p>
          </div>

          <div className="card">
            <img src={expresssql} alt="expresssql screenshot" />
            <a href="https://github.com/Newtonkamau14/Express-Sql">
              <h3>Express Sql</h3>
            </a>
            <p>A CRUD app using express and MySQL.</p>
          </div>

          <div className="card">
            <img src={fakerapi} alt="fakerapi screenshot" />
            <a href="https://github.com/Newtonkamau14/Fakerapi">
              <h3>Faker Api</h3>
            </a>
            <p>Using express to make HTTPS requests to an external api.</p>
          </div>
        </div>

        <h1 className="div-title">Contact Me:</h1>

        <div id="contact">
          <a href="https://github.com/Newtonkamau14">
            <img src={github} alt="github account link" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="linkedin account link" />
          </a>
        </div>

        <span>
          <h3 className="other-contact">Phone No: + 254712603849</h3>
        </span>
        <span>
          <h3 className="other-contact">Email: newtonkamau14@gmail.com</h3>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default App;
