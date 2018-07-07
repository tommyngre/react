import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">weird clicking game</h1>

    <div>
      {friends.map(friend => (
        <FriendCard
          key={friend.id}
          name={friend.name}
          image={friend.image}
        />
      ))
      }
    </div>

  </Wrapper>
);

export default App;
