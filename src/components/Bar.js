import {} from 'react-chartjs-2';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Bar.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Habit Progress',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(199, 21, 9, 0.7)',
        borderColor: 'rgb(240, 157, 151)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Habit Progress Chart',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;