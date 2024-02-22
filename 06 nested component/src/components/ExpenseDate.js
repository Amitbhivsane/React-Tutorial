import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div>
      <h2>{props.date.toISOString()}</h2>
    </div>
  );
}

export default ExpenseDate;
