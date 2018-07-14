import React from "react";
import "./Alert.css";

export const Alert = props => (
  <div id="alert-wrapper" className="container text-center">
    <h3>{props.score} to go! </h3>
    <h3><span className={props.outcomeClass}>{props.message}</span></h3>
    <h5 id="high-score">High Score: {props.highScore}</h5>
  </div>
);