import React from "react";

import "../styles/SkillLogo.css";

const SkillLogo = ({ logo }) => {
  return (
    <div className="skill-logo">
      <img src={logo} alt="" />
    </div>
  );
};

export default SkillLogo;
