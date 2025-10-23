import React, { useState, memo } from 'react';

const HabitTracker = memo(() => {
  const [habits, setHabits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddHabit = () => {
    if (inputValue.trim()) {
      setHabits([...habits, { text: inputValue, completedToday: false }]);
      setInputValue('');
    }
  };

  const handleToggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completedToday = !newHabits[index].completedToday;
    setHabits(newHabits);
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
        {habits.map((habit, index) => (
          <li key={index}>
            <span>{habit.text}</span>
            <button
              className={habit.completedToday ? 'completed' : ''}
              onClick={() => handleToggleHabit(index)}
            >
              {habit.completedToday ? 'Completed' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default HabitTracker;