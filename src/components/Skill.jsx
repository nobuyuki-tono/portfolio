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
import dockerLogo from "../img/docker-logo.png";
import sassLogo from "../img/sass-logo.png";
import typeScriptLogo from "../img/typescript-logo.png";
import mysqlLogo from "../img/mysql-logo.png";
import pythonLogo from "../img/python-logo.png";
import grapqlLogo from "../img/graphql-logo.png";
import jestLogo from "../img/jest-logo.jpg";
import firebaseLogo from "../img/firebase-logo.png";

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
          <SkillLogo logo={sassLogo} />
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
        <h3>Learning process & Eager to learn</h3>
        <div className="skill-list">
          <SkillLogo logo={typeScriptLogo} />
          <SkillLogo logo={grapqlLogo} />
          <SkillLogo logo={pythonLogo} />
          <SkillLogo logo={dockerLogo} />
          <SkillLogo logo={mysqlLogo} />
          <SkillLogo logo={jestLogo} />
          <SkillLogo logo={firebaseLogo} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
