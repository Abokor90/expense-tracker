import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {id: 1, title: "Rice", amount: 10, category: "Food", date: "2026-10-20"},
    {id: 2, title: "Milk", amount: 15, category: "Drinks", date: "2026-10-21"},
    {id: 3, title: "Oil", amount: 20, category: "Cooking Oil", date: "2026-10-22"},
  ]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      
      <ExpenseForm />

      {expenses.length === 0 ? (<p>No expenses yet</p>) 
      : (expenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} category={expense.category} date={expense.date} />
      )))}
    </div>
  );
}

export default App;