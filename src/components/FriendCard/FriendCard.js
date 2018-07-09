import React, { Component } from "react";
import "./FriendCard.css";

export class FriendCard extends Component {

  state = {
    isClick: true
  }

  render() {
    return (
      <div className="card col-3">
        <div className="img-container">
          <img className="img-responsive"
            alt={this.props.name}
            name={this.props.name}
            src={this.props.image}
            onClick={this.props.onClick} />
        </div>
        <div className="content">
          <h3>
            {this.props.name}
          </h3>
        </div>
      </div>
    );
  }

}