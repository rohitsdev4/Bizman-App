import React, { useState } from 'react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddHabit = () => {
    if (inputValue.trim()) {
      setHabits([...habits, { id: Date.now(), text: inputValue, completedToday: false }]);
      setInputValue('');
    }
  };

  const handleToggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completedToday: !habit.completedToday } : habit
    ));
  };

  return (
    <div className="widget">
      <h2>Habit Tracker</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new habit"
        />
        <button onClick={handleAddHabit}>Add Habit</button>
      </div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <span>{habit.text}</span>
            <button
              className={habit.completedToday ? 'completed' : ''}
              onClick={() => handleToggleHabit(habit.id)}
            >
              {habit.completedToday ? 'Completed' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;