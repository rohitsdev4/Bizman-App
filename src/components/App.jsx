import React, { useState } from 'react';
import Login from './Login';
import TodoList from './TodoList';
import HabitTracker from './HabitTracker';
import ExpenseTracker from './ExpenseTracker';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Welcome to Bizman-App</h1>
          <div className="widgets-container">
            <TodoList />
            <HabitTracker />
            <ExpenseTracker />
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;