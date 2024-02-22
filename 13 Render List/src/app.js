import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

let Dummy_Expense = [
  {
    id: "e1",
    title: "school fees",
    amount: 300,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "exam fees",
    amount: 4400,
    date: new Date(2023, 12, 12),
  },
  {
    id: "e3",
    title: "tiution fees",
    amount: 500,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e4",
    title: "book fees",
    amount: 4300,
    date: new Date(2022, 5, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    const updatedExpenses = [expense, ...expenses];

    setExpenses(updatedExpenses);
  };
  return (
    <div>
      <h1>Lets Get Started..</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
