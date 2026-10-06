Expense Tracker

A full-stack Expense Tracker built step by step while learning web development. This is my main learning project: every new concept I learn is first practiced in small exercises, then applied here.

Status: Phase 1 (React), in progress. The app currently runs on mock data in the frontend only.

Learning Roadmap
 - JavaScript
 - React (in progress)
 - Node.js + Express
 - PostgreSQL
 - Authentication + Authorization
 - Validation + Security
 - Deployment

After this project, I will build a larger Real Estate application using everything learned here.

Tech Stack (so far)
  React
  Vite (build tool and dev server)
  JavaScript (JSX)
  ESLint
  
Getting Started
bash
# Install dependencies
npm install

# Start the development server
npm run dev

Then open the local address printed in the terminal (usually http://localhost:5173/).

Project Structure
    expense-tracker/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── ExpenseItem.jsx   # Displays a single expense
    │   ├── App.jsx               # Root component
    │   ├── main.jsx              # Entry point (renders App)
    │   └── index.css
    ├── index.html
    └── package.json
What I've Learned So Far
**Lesson 1: Components + JSX**
A component is a JavaScript function that returns UI. Its name must start with a capital letter, because React uses the first letter to tell components (<ExpenseItem />) apart from HTML tags (<div>).
Components are used like tags (<ProfileCard />), never called like functions (ProfileCard()).
JSX is JavaScript syntax that looks like HTML. Its rules:
A component must return one root element (wrap siblings in a <div> or a fragment <>...</>).
 Use className instead of class.
 Every tag must be closed (<img />).
 Use {} to run JavaScript expressions inside JSX.
 export default and import names must match exactly, since JavaScript is case-sensitive.
 
**Lesson 2: Props**
Props pass data from a parent component to a child, like function arguments.
Props are read-only, and data flows one way: parent to child.
Destructuring props in the parameter list makes the expected data clear:
jsx
// ExpenseItem shows ONE expense. Its data arrives through props.
function ExpenseItem({ title, amount, category, date }) {
  return (
    <div className="expense-item">
      <h2>Title: {title}</h2>
      {/* The $ is display formatting, so it lives here, not in the data */}
      <p>Amount: ${amount}</p>
      <p>Category: {category}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export default ExpenseItem;
Passing props: strings use quotes, everything else uses {}.
jsx
// App.jsx
<ExpenseItem title="Oil" amount={50} category="Cooking Oil" date="2026-01-10" />
Why the prop type matters: "20" + "20" gives "2020" (text joined), but 20 + 20 gives 40. Amounts must be real numbers so totals can be calculated later.
Dates are stored as "YYYY-MM-DD" strings. Writing {2026-01-10} would be treated as subtraction.
A missing prop is undefined, and calling a method on it (like name.toUpperCase()) crashes the page. The browser console (F12) shows the error.
What's Next
 State (useState)
 Events
 Forms + controlled inputs
 Lists + keys
 Conditional rendering
 useEffect, data fetching, React Router
 Add, edit, delete, search, and filter expenses
 
**Planned Features**
Add, view, edit, and delete expenses
Categories, dates, and amounts
Search and filtering
Expense summaries
User accounts and authentication
Persistent PostgreSQL storage
Deployment
