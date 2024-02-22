import "./Card.css";
import React from "react";

const Card = (props) => {
  const classes = "card " + props.className; //css properties
  return <div className={classes}>{props.children}</div>; // expensex item css yeate ithe
};

export default Card;
