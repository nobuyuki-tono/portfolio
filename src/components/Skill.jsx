import React from "react";

import SkillLogo from "./SkillLogo";

import "../styles/Skill.css";

import htmlLogo from "../img/HTML5-Logo.png";
import cssLogo from "../img/css3-logo.png";
import jsLogo from "../img/js-logo.png";
import reactLogo from "../img/react-logo.png";
import nodeJsLogo from "../img/nodeJs-logo.png";
import reduxLogo from "../img/redux-logo.png";
import mongodbLogo from "../img/mongodb-logo.png";
import npmLogo from "../img/npm-logo.png";

const gitLogo =
  "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png";

const Skill = () => {
  return (
    <div className="skill">
      <h1>Skills</h1>
      <div className="skill-container">
        <h3>Front-end</h3>
        <div className="skill-list">
          <SkillLogo logo={htmlLogo} />
          <SkillLogo logo={cssLogo} />
          <SkillLogo logo={jsLogo} />
          <SkillLogo logo={reactLogo} />
          <SkillLogo logo={reduxLogo} />
        </div>
      </div>
      <div className="skill-container">
        <h3>Back-end</h3>
        <div className="skill-list">
          <SkillLogo logo={nodeJsLogo} />
          <SkillLogo logo={mongodbLogo} />
        </div>
      </div>
      <div className="skill-container">
        <h3>Other</h3>
        <div className="skill-list">
          <SkillLogo logo={gitLogo} />
          <SkillLogo logo={npmLogo} />
        </div>
      </div>
      <div className="skill-container">
        <h3>Eager to learn</h3>
        <div className="skill-list">
          <SkillLogo logo={gitLogo} />
          <SkillLogo logo={npmLogo} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
