import Expenses from "./components/Expenses";
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
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
