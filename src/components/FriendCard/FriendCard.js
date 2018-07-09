import React, { Component } from "react";
import "./FriendCard.css";

export class FriendCard extends Component {

  state = {
    isActive: true,
    class: "card col-3 active-card"
  }

  handleClick = event => {
    event.preventDefault();
    //const { name } = event.target;

    if (this.state.isActive) {
      this.setState({
        isActive: false,
        class: "card col-3 inactive-card"
      });
    }

  }

  render() {
    return (
      <div className={this.state.class} onClick={this.handleClick}>
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