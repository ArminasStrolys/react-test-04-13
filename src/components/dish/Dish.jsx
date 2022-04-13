import React from "react";

const Dish = (props) => {
  return (
    <div
      className="ui special cards"
      style={{ position: "relative", display: "inline-block", margin: "20px" }}
    >
      <div className="card">
        <div className="blurring dimmable image">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="content">
          <p className="header">{props.name}</p>
          <div className="meta">
            <span className="date">Type: {props.category}</span>
          </div>
        </div>
        <div className="extra content">
          <p>
            Ingredients: {props.ingredients}
            <br />
          </p>
          <br />
          <span className="centered floated">
            <i
              style={{ color: "red", fontSize: "20px" }}
              className="heart outline like icon"
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dish;
