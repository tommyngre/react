import React from "react";
import "./HighScore.css";

export const HighScore = props => (
  <div id="high-score-wrapper" className="">
    <div className="text-center">
      <h5 className="high-score-label">High Score: </h5>
      <h5 className="high-score">{props.highScore}</h5>
    </div>
  </div>
);