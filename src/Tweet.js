import React, { useContext } from "react";
import Linkify from "react-linkify";

import { UserContext } from "./App";
import { RetweetIcon } from "./Icons";
import "./Tweet.css";
import Reactions from "./Reactions";

export default function Tweet(props) {
  const user = useContext(UserContext);
  const {
    image,
    authorName,
    retweetedBy,
    authorHandle,
    text,
    time,
    stats,
    id,
    dispatch
  } = props;

  const shareInfo = { authorName, text, authorHandle, id, user };

  return (
    <div className="tweet">
      {retweetedBy && (
        <div className="retweet-info">
          {RetweetIcon} {retweetedBy} Retweeted
        </div>
      )}

      <div className={"original-tweet"}>
        {/* Show the author's profile picture and details. */}
        <div className="image-box">
          <img className="author-image" src={image} />
        </div>
        <div className="content-box">
          <h2 className="author-name">{authorName}</h2>
          <h3 className="author-handle">{authorHandle}</h3>

          {/* Show details of the tweet. */}
          <span className="time">{time}</span>
          <p className="tweet-text">
            <Linkify>{text}</Linkify>
          </p>

          {/* Show reaction buttons and counts. */}
          <Reactions stats={stats} dispatch={dispatch} shareInfo={shareInfo} />
        </div>
      </div>
    </div>
  );
}
