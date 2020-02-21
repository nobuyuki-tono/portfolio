import React from "react";

import WorkItem from "./WorkItem";

import "../styles/Work.css";

import youtTimesImg from "../img/youTimes-img.png";
import portfolioImg from "../img/portfolio-img.png";
import triTechImg from "../img/tri-tech-img.png";
import lyrifyImg from "../img/lyrify-img.png";

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
            detailText="You Times is a blog post web site. Implemented a CRUD operation.Used Skills are React.js, Sass, Node.js, Express.js, MongoDB, Material-UI, Bootstrap"
            imgUrl={youtTimesImg}
            siteUrl="https://aqueous-caverns-38849.herokuapp.com/"
            githubUrl="https://github.com/nobuyuki-tono/your-times"
            skills={[
              "React.js",
              "Sass",
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
            detailText="My personal portfolio. I used React.js to create this website"
            siteUrl=""
            githubUrl="https://github.com/nobuyuki-tono/portfolio"
          />
          <WorkItem
            title="Lyrify"
            imgUrl={lyrifyImg}
            detailText="Lyrify is a music lyrics search website.Used skills are React.js and "
            skills={["React.js", "CSS", "Rest-API"]}
            siteUrl="https://lyrify34568795.netlify.com/"
            githubUrl="https://github.com/nobuyuki-tono/react-lyrics-search-app-lyrify"
          />
        </div>
        {/* <button className="btn-more btn">More</button> */}
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
