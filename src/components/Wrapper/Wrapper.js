import React, { Component } from "react";
import friends from "../../friends.json";
import { Header } from "../Header/Header.js";
import { FriendCard } from "../FriendCard/FriendCard.js";
import "./Wrapper.css";

export class Wrapper extends Component {

  state = {
    score: 0,
    //move unguessed cards into `reviewed` when clicked
    reviewed: []
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
            />
          ))}
        </div>

      </div>
    );
  }
}