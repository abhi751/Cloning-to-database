import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">InstaClone</h1>
      </Link>
      <Link to="/post/add">
        <img
          className="camera-logo"
          src="https://img.icons8.com/ios/100/camera--v3.png"
          alt="Camera"
        />
      </Link>
    </div>
  );
};

export default Header;
