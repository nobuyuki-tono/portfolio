import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a rel="noopener noreferrer" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#work">
              WORK
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#skill">
              SKILL
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#contact">
              CONTACT
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="nobuyuki-tono-resume.pdf"
              target="_blank"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>

      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a rel="noopener noreferrer" href="#home">
                    HOME
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#work">
                    WORK
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#skill">
                    SKILL
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#contact">
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="nobuyuki-tono-resume.pdf"
                    target="_blank"
                  >
                    RESUME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
