import React, { useState } from "react";

import ItemDetail from "./ItemDetail";

import "../styles/WorkItem.css";

const WorkItem = ({ title, imgUrl, detailText }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const closeDetail = () => {
    console.log("HEllo");
    setShowDetail(false);
  };

  return (
    <>
      <div className="project">
        <img className="project-img" src={imgUrl} alt="" />
        <h3 className="project-title">{title}</h3>
        <div onClick={handleClick} className="project-skill">
          <ul>
            <li>React</li>
          </ul>
        </div>
      </div>
      {showDetail ? (
        <ItemDetail title={title} text={detailText} closeDetail={closeDetail} />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkItem;
