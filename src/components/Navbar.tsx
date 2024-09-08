import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="logo">
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faCode as IconProp} size="2xl" />
          </a>
        </li>
      </div>
      <div className="hamburger" onClick={toggleNavBar}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <nav className={`nav-bar ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#skills">
              <i className="fa-solid fa-screwdriver-wrench" />
              Skills
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fa-solid fa-folder" />
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa-solid fa-phone" />
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1r8mG7AgbCDnnOslviGsZhw3B2yGPUGzv/view?usp=sharing"
              target="_blank"
            >
              <i className="fa-regular fa-file-lines" />
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
