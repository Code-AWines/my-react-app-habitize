import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HabitInput from './HabitInput';

test('shows error when input is empty', () => {
  const setInputError = jest.fn();
  const setHabitInput = jest.fn();

  render(
    <HabitInput
      habitInput=""
      setHabitInput={setHabitInput}
      setInputError={setInputError}
    />
  );

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: ' ' } });

  expect(setInputError).toHaveBeenCalledWith('Habit name cannot be empty');
});