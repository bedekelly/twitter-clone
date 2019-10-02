import React, { useContext } from "react";
import { UserContext } from "./App";
import { Reply, Heart, Retweet, Share } from "./Reactions.js";
import { RetweetIcon } from "./Icons";

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

  const toggleHeart = () => dispatch({ type: "TOGGLE_HEART", id });
  const heartCount = stats.heartCount + (stats.loved ? 1 : 0);

  const retweet = () => dispatch({ type: "RETWEET", id, user });

  return (
    <div className="tweet">
      {retweetedBy && (
        <div className="retweet-info">
          {RetweetIcon}
          {retweetedBy} Retweeted
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
          <p className="tweet-text">{text}</p>

          {/* Show reaction buttons and counts. */}
          <div className="reactions">
            <Reply count={stats.replyCount} />
            <Retweet onClick={retweet} count={stats.retweetCount} />
            <Heart
              toggle={toggleHeart}
              loved={stats.loved}
              count={heartCount}
            />
            <Share text={`${text}  –${authorName} (${authorHandle})`} />
          </div>
        </div>
      </div>
    </div>
  );
}
