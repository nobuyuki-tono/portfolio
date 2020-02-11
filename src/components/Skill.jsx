import React from "react";

import SkillLogo from "./SkillLogo";

import "../styles/Skill.css";

import htmlLogo from "../img/HTML5-Logo.png";
import cssLogo from "../img/css3-logo.png";
import jsLogo from "../img/js-logo.png";
import reactLogo from "../img/react-logo.png";
import nodeJsLogo from "../img/nodeJs-logo.png";

const Skill = () => {
  return (
    <div className="skill">
      <h1>Skills I have</h1>
      <div className="skill-list">
        <SkillLogo logo={htmlLogo} />
        <SkillLogo logo={cssLogo} />
        <SkillLogo logo={jsLogo} />
        <SkillLogo logo={reactLogo} />
        <SkillLogo logo={nodeJsLogo} />
      </div>
    </div>
  );
};

export default Skill;
