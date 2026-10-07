import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem title="Oil" amount={50} category="Cooking Oil" date="2026-01-10" />
      <ExpenseItem title="Rice" amount={40} category="Grains" date="2026-10-20" />
      <ExpenseItem title="Soda" amount={30} category="Beverages" date="2026-11-25" />
    </div>
  );
}

export default App;