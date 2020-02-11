import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#">SKILL</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
