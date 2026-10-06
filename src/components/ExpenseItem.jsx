// ExpenseItem shows ONE expense. It's data will arrive through props
function ExpenseItem({ title, amount, category, date } ) {
  return (
    <div className="expense-item">
      <h2>Title: {title}</h2>
      <p>Amount: ${amount}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default ExpenseItem;