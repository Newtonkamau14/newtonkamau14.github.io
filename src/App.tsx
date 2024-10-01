import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Skill from "./components/Skill";
import { contacts, projects, skills } from "./data";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div id="intro">
          <h1>Hi there!</h1>
          <p>
            As a seasoned full-stack developer, I excel in React, HTML, CSS,
            JavaScript, and database management (MySQL, MongoDB). I'm skilled in
            server-side tech (Node.js, Express) and crafting dynamic web
            applications. I'm eager to contribute my expertise to your team and
            drive innovative projects.
          </p>
        </div>
        <div id="skills">
          <h1 className="div-title">Skills:</h1>
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>

        <h1 className="div-title">Projects:</h1>
        <div className="projects" id="projects"></div>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}

        <h1 className="div-title">Contact Me:</h1>
        <div id="contact">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
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
