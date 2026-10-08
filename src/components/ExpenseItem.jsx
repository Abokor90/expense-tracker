import { useState } from 'react'

// ExpenseItem shows ONE expense. Its data will arrive through props
function ExpenseItem({ title, amount, category, date }) {
  const [isPaid, setIsPaid] = useState(false);

  const [isHovered, setIsHovered ]  = useState(false);

  function handleTogglePaid() {
    setIsPaid(!isPaid);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className="expense-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{backgroundColor : isHovered ? 'lightgray' : 'white'}}
    >
      <h2>Title: {title}</h2>
      <p>Amount: ${amount}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
      <p>Status: {isPaid ? 'Paid' : 'Unpaid'}</p>
      <button onClick={handleTogglePaid}>{isPaid ? 'Mark as Unpaid' : 'Mark as Paid'}</button>
    </div>
  );
}

export default ExpenseItem;