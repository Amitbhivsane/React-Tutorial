import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [newtitle, setnewTitle] = useState("");

  const chageHandeler = (event) => {
    setnewTitle(event.target.value);
  };
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(newtitle);
  };

  return (
    <Card className="expenseitem">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expenseitem-desc">
        <h2>{title}</h2>
      </div>
      <div className="expenseite-price">
        <h2>{props.amount}</h2>
      </div>
      <input type="text" value={newtitle} onChange={chageHandeler} />
      <button onClick={clickHandler}> ChangeTitle</button>
    </Card>
  );
};

export default ExpenseItem;
