import React from "react";

import WorkItem from "./WorkItem";

import "../styles/Work.css";

import youtTimesImg from "../img/youTimes-img.png";
import portfolioImg from "../img/portfolio-img.png";
import triTechImg from "../img/tri-tech-img.png";

const Work = () => {
  return (
    <div id="work" className="work">
      <div className="work-heading">
        <h1>MY WORK</h1>
      </div>
      <div className="work-personal">
        <h2>Personal Project</h2>
        <div className="project-container">
          <WorkItem
            title="You Times"
            imgUrl={youtTimesImg}
            siteUrl="https://aqueous-caverns-38849.herokuapp.com/"
            githubUrl="https://github.com/nobuyuki-tono/your-times"
            skills={[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Material-UI",
              "Bootstrap"
            ]}
          />
          <WorkItem
            title="Portfolio"
            imgUrl={portfolioImg}
            skills={["React.js", "CSS"]}
            siteUrl=""
            githubUrl="https://github.com/nobuyuki-tono/portfolio"
          />
        </div>
        <button className="btn-more btn">More</button>
      </div>
      <div className="work-team">
        <h2>Team Project</h2>
        <div className="project-container">
          <WorkItem
            title="Client Project"
            imgUrl={triTechImg}
            skills={["React.js", "Sass"]}
            siteUrl="https://lucid-benz-f12be9.netlify.com/"
            githubUrl="https://github.com/Vlad-Vekslyer/tri-tech"
            detailText="This is a simple TO Do List APP. You can add task, update task, and delete task."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
