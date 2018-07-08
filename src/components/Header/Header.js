import React from "react";
import "./Header.css";

export const Header = props => (
  <div className="container">
        <h1>Minecraft Character Flashcards!</h1>
        <h2>Click em all!</h2>
        <h3>{props.score} to go!</h3>
  </div>
);