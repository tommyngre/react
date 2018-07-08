import React from "react";
import "./FriendCard.css";

export const FriendCard = props => (
  <div className="card col-sm-3">
    <div className="img-container">
      <img className="img-responsive" alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <h3>
        {props.name}
      </h3>
    </div>
  </div>
);