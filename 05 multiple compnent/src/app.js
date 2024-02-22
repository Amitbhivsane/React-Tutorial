import ExpenseItem from "./components/ExpenseItem";

function App() {
  //array of object
  let expenses = [
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

  return (
    <div>
      <h1>Lets Get Started..</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
