// BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, zoomPlugin);

const BarChart = () => {
  const data = {
    labels: ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'],
    datasets: [
      {
        label: 'Sales',
        data: [80, 20, 60, 30, 50, 40, 70],
        backgroundColor: '#5570F1',
        borderRadius: 12,
        barPercentage: 0.3, 
        categoryPercentage: 0.5,
      },
      {
        label: 'Remaining',
        data: [100, 100, 100, 100, 100, 100, 100],
        backgroundColor: 'rgba(85, 112, 241, 0.2)', 
        borderRadius: 12,
        barPercentage: 0.3,
        categoryPercentage: 0.5, 
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return value + 'k';
          },
        },
      },
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          wheel: {
            // enabled: true,
            speed: 0,
          },
          pinch: {
            enabled: true,
            speed: 0,
          },
          mode: 'x',
        },
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {},
    },
  };

  return (
    <div style={{ width: '100%', height: '300px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

