import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"; //multiple component
function ExpenseItem(props) {
  return (
    <div className="expenseitem">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expenseitem-desc">
        <h2>{props.title}</h2>
      </div>
      <div className="expenseite-price">
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
