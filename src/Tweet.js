import React from "react";
import { Reply, Heart, Retweet, Share } from "./Reactions.js";


export default function Tweet(props) {
  const { image, authorName, authorHandle, text, time, stats, id, dispatch } = props;

  const toggleHeart = () => dispatch({ type: 'TOGGLE_HEART', id });
  const heartCount = stats.heartCount + (stats.loved ? 1 : 0);

  return (
    <div className="tweet">

      { /* Show the author's profile picture and details. */ }
      <div className="image-box">
        <img className="author-image" src={image} />
      </div>
      <div className="content-box">
        <h2 className="author-name">{authorName}</h2>
        <h3 className="author-handle">{authorHandle}</h3>

        { /* Show details of the tweet. */ }
        <span className="time">{time}</span>
        <p className="tweet-text">{text}</p>

        { /* Show reaction buttons and counts. */ }
        <div className="reactions">
          <Reply count={stats.replyCount} />
          <Retweet count={stats.retweetCount} />
          <Heart toggle={toggleHeart} loved={stats.loved} count={heartCount} />
          <Share text={`${text}  –${authorName} (${authorHandle})`}/>
        </div>

      </div>
    </div>
  );
}
