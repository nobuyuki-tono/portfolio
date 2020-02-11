import React from "react";

import Navbar from "./Navbar";

import "../styles/Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <Navbar />
      <div className="home-heading">
        <h1>Hello World!! I'm Nobu. I'm a Full Stuck Web Developer</h1>
        <p>
          I'm really looking forward to working and comtributing to commutity as
          a Web Developer
        </p>
        <p>I love Coding and Music</p>

        <div className="heading-btn-div">
          <a className="heading-btn btn" href="#work">
            CHECK MY WORK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
