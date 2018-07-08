import React, { Component } from "react";
import friends from "../../friends.json";
import { Header } from "../Header/Header.js";
import { FriendCard } from "../FriendCard/FriendCard.js";
import "./Wrapper.css";

export class Wrapper extends Component {

  state = {
    score: 0,
    clicked: [] 
  };

  handleClick = event => {
    event.preventDefault();
    const {name} = event.target;
    if (this.state.clicked.indexOf(name) <0 ) {
      this.setState({
        clicked: this.state.clicked.push(name)
      });
      console.log(name + "added to clicked")
      console.log("clicked",this.state.clicked)
      this.setState({
        score: this.state.score+1
      });
    } else {
      //already guessed
    }
  };
  

  render() {
    return (
      <div className="container">
        
        <Header
          score={16-this.state.score}
        />

        <div className="row">
          {friends.map(friend => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              onClick={this.handleClick}
            />
          ))}
        </div>

      </div>
    );
  }
}