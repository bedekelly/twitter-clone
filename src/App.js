import React, { useReducer } from "react";
import "./App.css";
import TWEETS from "./tweetData.js";
import Tweet from "./Tweet";
import TopBar from './TopBar';
import Compose from "./Compose";

function actions(state, action) {
  if (action.type === "TOGGLE_HEART") {
    return state.map(s => {
      if (s.id !== action.id) return s;
      return { ...s, stats: { ...s.stats, loved: !s.stats.loved } };
    });
  } else if (action.type === "RETWEET") {
    const originalTweet = state.find(s => s.id === action.id);
    const newTweet = {...originalTweet, retweetedBy: action.user }
    return [newTweet, ...state]
  } else {
    console.error(action.type);
  }
}

export const UserContext = React.createContext("Default User");

export default function App() {
  const [tweets, dispatch] = useReducer(actions, TWEETS);
  const user = "Bede Kelly";

  return (
    <UserContext.Provider value={user}>
      <div id="tweets">
        <TopBar />
        {tweets.map((t, index) => (
          <Tweet key={index} dispatch={dispatch} {...t} />
        ))}
        <Compose />
      </div>
    </UserContext.Provider>
  );
}
