import React, { Component } from "react";
import cards from "../../cards.json";
import { Header } from "../Header/Header.js";
import { HighScore } from "../HighScore/HighScore.js";
import { Alert } from "../Alert/Alert.js";
import { Card } from "../Card/Card.js";
import "./Wrapper.css";

export class Wrapper extends Component {

  state = {
    //GAME LOGIC
    score: 0,
    clicked: [],
    //PASS TO ALERT
    turnOutcome: "",
    outcomeClass: "",
    highScore: 0
  };

  //SHUFFLE CARDS
  shuffle = () => {
      for (let i = cards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [cards[i], cards[j]] = [cards[j], cards[i]]; // eslint-disable-line no-param-reassign
      }
  }

  checkHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      })
    }
  }

  handleClick = event => {
    event.preventDefault();
    const {name} = event.target;

    // IF CLICKED CHARACTER IS NOT IN `CLICKED`
    // -ADD TO `CLICKED`
    // -INCREMENT `SCORE`
    if (this.state.clicked.indexOf(name) <0 ) {
      this.setState({
        clicked: this.state.clicked.concat([name]),
        turnOutcome: "Got one! Good job!",
        outcomeClass: "green",
        score: this.state.score+1
      });
    } else {
      this.setState({
        clicked: [],
        turnOutcome: "Aw man, you clicked that already!",
        outcomeClass:"red",
        score: 0
      });
    }

    if (this.state.score === 16) {
      // HANDLE WIN
    }

    this.checkHighScore();
    this.shuffle();

  };
  
  render() {
    return (
      <div className="container">

        <HighScore 
          highScore = {this.state.highScore}
        />

        <Header />

        <Alert
          message={this.state.turnOutcome}
          outcomeClass={this.state.outcomeClass}
          score={16-this.state.score}
        />

        <div id="cards-wrapper" className="row">
          {cards.map(card => (
            <Card
              key={card.id}
              name={card.name}
              image={card.image}
              onClick={this.handleClick}
            />
          ))}
        </div>

      </div>
    );
  }
}