# Expense Tracker

A full-stack expense tracking application, built step by step as a learning project. Users will be able to record, categorize, search, and summarize their expenses.

> **Status:** frontend in progress (React, using mock data). Backend and database come next.

## Features

**Implemented**

- [x] Display a list of expenses (title, amount, category, date)
- [x] Mark an expense as paid or unpaid
- [x] Highlight an expense when hovering over it

**Planned**

- [ ] Add, edit, and delete expenses
- [ ] Categories
- [ ] Search and filtering
- [ ] Expense summaries
- [ ] User accounts and authentication
- [ ] Persistent storage with PostgreSQL
- [ ] Deployment

## Tech Stack

**Current**

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- ESLint

**Planned**

- Node.js + Express (REST API)
- PostgreSQL
- JWT or session-based authentication

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local address printed in the terminal (usually `http://localhost:5173/`).

## Project Structure

```
expense-tracker/
├── public/
├── src/
│   ├── components/
│   │   └── ExpenseItem.jsx   # Displays one expense
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css
├── index.html
└── package.json
```

## Learning Notes

The notes and exercises behind this project live in my [React course repo](#). Replace `#` with the link to your course repo on GitHub.
