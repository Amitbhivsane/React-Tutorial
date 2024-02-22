import React, { useState } from "react";

import "./NewExpense.css";

const ExpenseForm = () => {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");
  const [enterDate, setenterDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setenterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setenterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setenterDate(event.target.value);
  };

  return (
    <form action="">
      <div className="ExpenseForm-control">
        <div className="newExpense-Control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="newExpense-Control">
          <label htmlFor="">Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="newExpense-Control">
          <label htmlFor="">Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="newExpense_action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
