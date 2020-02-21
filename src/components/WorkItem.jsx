import React, { useState } from "react";

import ItemDetail from "./ItemDetail";

import "../styles/WorkItem.css";

const WorkItem = ({
  title,
  imgUrl,
  detailText,
  skills,
  siteUrl,
  githubUrl
}) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      <div className="project">
        <img className="project-img" src={imgUrl} alt="" />
        <h3 className="project-title">{title}</h3>
        <div onClick={handleClick} className="project-skill">
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
          <p className="p-smalldevice">Tap to see detail</p>
        </div>
      </div>
      {showDetail ? (
        <ItemDetail
          title={title}
          text={detailText}
          closeDetail={closeDetail}
          siteUrl={siteUrl}
          githubUrl={githubUrl}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default WorkItem;
