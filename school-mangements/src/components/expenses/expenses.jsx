import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { HeadingThree } from '../headingThree/headingThree';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpensesChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Expenses (millions)',
        data: [125000, 100000, 80000],
        backgroundColor: ['#00e6e6', '#3375FF', '#FFA500'], // cyan, blue, orange
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value / 1000}k`,
        },
        max: 150000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='expenses'>
  <div className="card p-3">
      
     <HeadingThree title='Expenses'/>
      <div className="d-flex expenses-chart justify-content-between px-2 text-center mb-4">
        <div className=''>
          <div className="text-muted">Jan 2019</div>
          <div className="fw-bold text-success">$ 15,000</div>
          <div style={{ height: '2px', backgroundColor: '#00e6e6', marginTop: '2px' }}></div>
        </div>
        <div className=''>
          <div className="text-muted">Feb 2019</div>
          <div className="fw-bold text-primary">$ 10,000</div>
          <div style={{ height: '2px', backgroundColor: '#3375FF', marginTop: '2px' }}></div>
        </div>
        <div className=''>
          <div className="text-muted">Mar 2019</div>
          <div className="fw-bold text-warning">$ 8,000</div>
          <div style={{ height: '2px', backgroundColor: '#FFA500', marginTop: '2px' }}></div>
        </div>
      </div>

      <Bar data={data} options={options} />
    </div>
    </div>
  
  );
};

export default ExpensesChart;
