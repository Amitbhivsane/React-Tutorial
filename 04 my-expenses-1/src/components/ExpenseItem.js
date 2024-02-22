import "./ExpenseItem.css";
//<h2>{props.date.toISOString()}</h2> used in date expeendate
function ExpenseItem(props) {
  // const month = props.date.toLocalString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocalString("en-US", { day: "2-digit" });
  return (
    <div className="expenseitem">
      <div>
        <h2>{props.date.toISOString()}</h2>
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
