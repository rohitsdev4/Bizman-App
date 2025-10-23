import React, { useState, memo } from 'react';

const ExpenseTracker = memo(() => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (description.trim() && amount.trim()) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="widget">
      <h2>Expense Tracker</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ExpenseTracker;