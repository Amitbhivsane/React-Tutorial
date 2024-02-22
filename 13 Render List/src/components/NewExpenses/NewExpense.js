import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expensedata = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedata);
    console.log(expensedata);
  };

  return (
    <div className="NewExpense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
