import React from 'react';
import './Button.css';

const HabitButtons = ({ habitInput, setHabitInput, habits, setHabits }) => {
  const handleAddHabit = () => {
    if (!habitInput.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habitInput.trim(),
      progress: 0
    };

    setHabits([...habits, newHabit]);
    setHabitInput('');
  };

  const handleIncrement = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, progress: habit.progress + 1 } : habit
    ));
  };

  const handleDelete = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="button-group">
      <button className="add-button" onClick={handleAddHabit}>
        Add Habit
      </button>

      {habits.map(habit => (
        <div key={habit.id} className="habit-entry">
          <span>{habit.name} — Progress: {habit.progress}</span>
          <div className="habit-button-row">
            <button
              className="complete-button"
              onClick={() => handleIncrement(habit.id)}
            >
              Complete
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(habit.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitButtons;