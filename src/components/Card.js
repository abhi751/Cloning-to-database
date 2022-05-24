import React, { useEffect } from "react";

const Card = ({ obj }) => {
  const { name, location, likes, description, PostImage, date } = obj;

  return (
    <div className="card">
      <div className="name-location">
        <div className="options">...</div>
        <h3>{name}</h3>

        <p className="location">{location}</p>
      </div>
      <div>
        <img
          src={process.env.REACT_APP_API + "/image/" + PostImage}
          alt="Shinchan"
        />
      </div>
      <div className="info">
        <div className="like-send-button">
          <span className="likebutton">{"\u2661"}</span>
          <span className="sendbutton">{"\u27A2"}</span>
        </div>
        <div className="date">{date}</div>

        <div className="last">
          <div className="likes">{likes} likes</div>
          <div className="desc">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
