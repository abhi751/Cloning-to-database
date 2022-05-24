import React from "react";
import { PostView } from "./PostView";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="left-div">
        <img src="./Landing.png" alt="" />
      </div>
      <div className="right-div">
        <div className="right-div-content">
          <h1>10X Team 04</h1>
          <Link to="/postview">Enter</Link>
        </div>
      </div>
    </div>
  );
};
