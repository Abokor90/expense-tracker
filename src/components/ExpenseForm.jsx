import { useState } from "react";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      title: title,
      amount: Number(amount),
      category: category,
      date: date
    };
    console.log(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input value={title} onChange={handleTitleChange} placeholder="Title" />
      <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Choose a category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
      </select>
      <input type="date" value={date} onChange={handleDateChange} />
      <button type="submit">Submit</button>

      <p>New expense: {title}</p>
      <p>Amount: {amount}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
    </form>
  );
}

export default ExpenseForm;
