import React, { useReducer } from "react";
import "./App.css";
import TWEETS from "./tweetData.js";
import Tweet from "./Tweet";


function actions(state, action) {
  if (action.type === 'TOGGLE_HEART') {
    return state.map(s => {
      if (s.id !== action.id) return s;
      return {...s, stats: {...s.stats, loved: !s.stats.loved}};
    });
  } else {
    console.error(action.type);
  }
}


export default function App() {
  const [tweets, dispatch] = useReducer(actions, TWEETS);

  return (
    <div id="tweets">
      {tweets.map((t, index) => (
        <Tweet key={index} dispatch={dispatch} {...t} />
      ))}
    </div>
  );
}
