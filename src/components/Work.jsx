import React from "react";

import WorkItem from "./WorkItem";

import "../styles/Work.css";
import img1 from "../img/img1.png";

const Work = () => {
  return (
    <div id="work" className="work">
      <div className="work-heading">
        <h1>MY WORK</h1>
      </div>
      <div className="work-personal">
        <h1>Personal Project</h1>
        <div className="project-container">
          <WorkItem title="my Project1" imgUrl={img1} />
          <WorkItem title="my Project2" imgUrl={img1} />
        </div>
        <button className="btn-more btn">More</button>
      </div>
      <div className="work-team">
        <h1>Team Project</h1>
        <div className="project-container">
          <WorkItem
            title="my project2"
            imgUrl={img1}
            detailText="This is a simple TO Do List APP. You can add task, update task, and delete task."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
