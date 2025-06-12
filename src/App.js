import React, { useState, useEffect } from 'react';
import HabitButtons from './components/Button';
import HabitInput from './components/HabitInput';
import './App.css';
import BarChart from './components/Bar';

function App() {
  const [habitInput, setHabitInput] = useState('');
  const [habits, setHabits] = useState([]);
  const [inputError, setInputError] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

useEffect(() => {
  const stored = localStorage.getItem('habits');
  if (stored) {
    try {
      setHabits(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse habits from localStorage:', e);
    }
  }
  setIsInitialLoad(false);
}, []);

useEffect(() => {
  if (!isInitialLoad) {
    localStorage.setItem('habits', JSON.stringify(habits));
  }
}, [habits, isInitialLoad]);


  return (
    <div className="App">
      <h1 className="app-title">Habitize</h1>

      <HabitInput
        habitInput={habitInput}
        setHabitInput={setHabitInput}
        setInputError={setInputError}
      />

      {inputError && <p className="error-text">{inputError}</p>}

      <HabitButtons
        habitInput={habitInput}
        setHabitInput={setHabitInput}
        habits={habits}
        setHabits={setHabits}
      />

      {habits.length > 0 && (
        <BarChart
          data={habits.map(habit => ({
            label: habit.name,
            value: habit.progress
          }))}
        />
      )}
    </div>
  );
}

export default App;