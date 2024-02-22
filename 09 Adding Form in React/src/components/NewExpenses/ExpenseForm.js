import React from "react";

import "./NewExpense.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="ExpenseForm-control">
        <div className="newExpense-Control">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className="newExpense-Control">
          <label htmlFor="">Amount</label>
          <input type="number" />
        </div>
        <div className="newExpense-Control">
          <label htmlFor="">Date</label>
          <input type="date" />
        </div>
        <div className="newExpense_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
