import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new habit to the list', () => {
  render(<App />);

  const input = screen.getByRole('textbox');
  const addButton = screen.getByText(/add habit/i);

  fireEvent.change(input, { target: { value: 'Exercise' } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Exercise/)).toBeInTheDocument();
});