import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("new titles..");
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
      <button onClick={clickHandler}> ChangeTitle</button>
    </Card>
  );
};

export default ExpenseItem;
