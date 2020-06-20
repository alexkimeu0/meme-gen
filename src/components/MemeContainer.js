import React from "react";

import "./MemeContainer.css";

const MemeContainer = (props) => (
  <div className="meme-container">
    <img src={props.img} alt="meme" />
    <h1 className="top">{props.top}</h1>
    <h1 className="bottom">{props.bottom}</h1>
  </div>
);

export default MemeContainer;
