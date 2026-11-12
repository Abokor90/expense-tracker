import { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {id: 1, title: "Rice", amount: 10, category: "Food", date: "2026-10-20"},
    {id: 2, title: "Milk", amount: 15, category: "Drinks", date: "2026-10-21"},
    {id: 3, title: "Oil", amount: 20, category: "Cooking Oil", date: "2026-10-22"},
  ]);

  function handleAddExpense({ title, amount, category, date }) {
    const newExpense = {id: Date.now(), title: title, amount: amount, category: category, date: date }
    setExpenses([...expenses, newExpense]);
  }

  useEffect(() => {
    document.title = "Expenses: " + expenses.length;
  }, [expenses]);

  return (
    <div>
      <h1>Expense Tracker</h1>

      
      <ExpenseForm onAddExpense={handleAddExpense}/>

      {expenses.length === 0 ? (<p>No expenses yet</p>) 
        : (expenses.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} category={expense.category} date={expense.date} />
      )))}
    </div>
  );
}

export default App;