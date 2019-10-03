import React from "react";
import { RetweetIcon, ReplyIcon, HeartIcon, ShareIcon } from "./Icons";

async function share(obj) {
  console.log("Trying to share", obj);
  if (navigator.share) {
    try {
      const response = navigator.share(obj);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.log("Fallback share");
  }
}

export function Retweet({ count, onClick }) {
  return (
    <div className={"reaction retweet"} onClick={onClick} role={"button"}>
      <div className="retweet-container">{RetweetIcon}</div>
      <span className={"reaction-count retweet-count"}>{count}</span>
    </div>
  );
}

export function Heart({ count, loved, toggle }) {
  const className = `reaction heart ${loved ? 'loved' : ''}`;
  return (
    <div className={className} onClick={toggle}>
      <div className="heart-container">{HeartIcon}</div>
      <span className={"reaction-count heart-count"}>{count}</span>
    </div>
  );
}

export function Reply({ count }) {
  return (
    <div className="reaction reply" role={"button"}>
      <div className="reply-container">{ReplyIcon}</div>
      <span className="reaction-count reply-count">{count}</span>
    </div>
  );
}

export function Share({text}) {
  return (
    <div className={"reaction share"} onClick={() => share({text})} role={"button"}>
      <div className="share-container">{ShareIcon}</div>
    </div>
  );
}


export default function Reactions({stats, dispatch, shareInfo}) {
  const toggleHeart = () => dispatch({ type: "TOGGLE_HEART", id });
  const {text, authorName, authorHandle, id, user} = shareInfo;
  const heartCount = stats.heartCount + (stats.loved ? 1 : 0);
  const retweet = () => dispatch({ type: "RETWEET", id, user });

  return <div className="reactions">
    <Reply count={stats.replyCount} />
    <Retweet onClick={retweet} count={stats.retweetCount} />
    <Heart
      toggle={toggleHeart}
      loved={stats.loved}
      count={heartCount}
    />
    <Share text={`${text}  –${authorName} (${authorHandle})`} />
  </div>
}
