import React from "react";
import './TopBar.css';

const ReloadIcon = <span className={"reload-icon"}>♼</span>;

export default function TopBar() {
  return <div className="top-bar">
    <img className="profile-pic" src="https://placeimg.com/50/50/person" alt="Profile picture"/>
    <h1 className={"home-header"}>Home</h1>
    <span className={"reload"}>
      {/*{ ReloadIcon }*/}
    </span>
  </div>;
}
