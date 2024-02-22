import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expenseitem">
      <div>
        <h2>March 12th 2023</h2>
      </div>
      <div className="expenseitem-desc">
        <h2>Car Insurance</h2>
      </div>
      <div className="expenseite-price">$200</div>
    </div>
  );
}

export default ExpenseItem;
