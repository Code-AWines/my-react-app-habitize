import React from 'react';
import './HabitInput.css';

const HabitInput = ({ habitInput, setHabitInput, setInputError }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setHabitInput(value);

    if (!value.trim()) {
      setInputError('Habit name cannot be empty');
    } else if (value.length > 50) {
      setInputError('Habit name too long (max 50 characters)');
    } else {
      setInputError('');
    }
  };

  return (
    <div className="habit-input">
      <input
        type="text"
        className="habit-input"
        placeholder="Enter a habit"
        value={habitInput}
        onChange={handleChange}
    />

    </div>
  );
};

export default HabitInput;
