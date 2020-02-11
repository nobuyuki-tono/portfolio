import React from "react";

import "../styles/ItemDetail.css";

const ItemDetail = ({ closeDetail, title, text }) => {
  console.log("Hello", closeDetail);
  return (
    <div className="detail">
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <button onClick={closeDetail} className="detail-btn close-btn">
          CLOSE
        </button>
        <button className="detail-btn">
          <a href="">GO TO WEBSITE</a>
        </button>
        <button className="detail-btn">
          <a href="">GO TO Github</a>
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
