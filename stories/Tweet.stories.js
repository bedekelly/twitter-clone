import React from "react";
import '../src/App.css';
import TopBar from '../src/TopBar.js';
import Tweet from "../src/Tweet";

export default {
  title: 'Tweet',
  component: Tweet
}

const simpleTweetData = {
  image: "https://placeimg.com/50/50/any",
  authorName: "Bede Kelly",
  authorHandle: "@bedekelly",
  time: "2m",
  text: `I'm giving a conference talk soon!`,
  stats: {
    heartCount: 14,
      replyCount: 2,
      retweetCount: 3
  },
  id: '1'
};

const retweetData = {
  image: "https://placeimg.com/50/50/any",
  authorName: "Bede Kelly",
  authorHandle: "@bedekelly",
  time: "2m",
  text: `I'm giving a conference talk soon!`,
  retweetedBy: 'Donald Trump',
  stats: {
    heartCount: 14,
    replyCount: 2,
    retweetCount: 3
  },
  id: '1'
};

export const SimpleTweet = () => <Tweet {...simpleTweetData} />;
export const RetweetedTweet = () => <Tweet {...retweetData} />;