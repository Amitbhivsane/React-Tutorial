import "./ExpenseDate.css";
import React from "react";

const ExpenseDate = (props) => {
  return (
    <div>
      <h2>{props.date.toISOString()}</h2>
    </div>
  );
};

export default ExpenseDate;
