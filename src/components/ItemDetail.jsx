import React from "react";

import "../styles/ItemDetail.css";

const ItemDetail = ({ closeDetail, title, text, siteUrl, githubUrl }) => {
  console.log(siteUrl);
  return (
    <div className="detail">
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <button className="detail-btn">
          <a href={siteUrl} target="_blanck">
            GO TO WEBSITE
          </a>
        </button>
        <button className="detail-btn">
          <a href={githubUrl} target="_blanck">
            GO TO Github
          </a>
        </button>
        <button onClick={closeDetail} className="detail-btn close-btn">
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
