import React from 'react';
import { render, screen } from '@testing-library/react';
import BarChart from './Bar';

jest.mock('react-chartjs-2', () => ({
  Bar: () => <div>Mocked Bar Chart</div>
}));

const mockData = [
  { label: 'Exercise', value: 5 },
  { label: 'Reading', value: 3 }
];

test('renders mocked bar chart', () => {
  render(<BarChart data={mockData} />);
  expect(screen.getByText('Mocked Bar Chart')).toBeInTheDocument();
});
