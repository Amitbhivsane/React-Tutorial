import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //css properties
  return <div className={classes}>{props.children}</div>; // expensex item css yeate ithe
}

export default Card;
