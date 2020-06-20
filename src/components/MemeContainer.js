import React from "react";

import "./MemeContainer.css";

const MemeContainer = (props) => (
  <div className="meme-container">
    <img src={props.img} alt="meme" />
  </div>
);

export default MemeContainer;
