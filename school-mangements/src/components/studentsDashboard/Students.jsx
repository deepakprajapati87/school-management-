import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { HeadingThree } from '../headingThree/headingThree';

ChartJS.register(ArcElement, Tooltip, Legend);

const StudentsChart = () => {
  // 1) Data
  const data = {
    labels: ['Female Students', 'Male Students'],
    datasets: [{
      data: [45000, 105000],
      backgroundColor: ['#3375FF', '#FFA500'],
      hoverOffset: 10,
    }]
  };

  // 2) Options
  const options = {
    cutout: '70%',              // makes it a donut
    responsive: true,
    plugins: {
      legend: { display: false } // we’ll build our own legend
    }
  };

  return (
    <div className='students'>
    <div className="card p-3">
      {/* Header */}
   
     <HeadingThree title='Students'/>
      {/* Donut chart */}
      <div style={{ width: 250, margin: '0 auto' }}>
        <Pie data={data} options={options} />
      </div>

      {/* Custom legend + values */}
      <div className="d-flex justify-content-between align-items-center mt-4 px-2">
        {/* Female */}
        <div className="text-center">
          <div>
            <span 
              className="d-inline-block mb-1" 
              style={{
                width: 40, height: 4, 
                backgroundColor: '#3375FF',
                borderRadius: 2
              }}
            />
          </div>
          <div className="text-muted small">Female Students</div>
          <div className="fw-bold">45,000</div>
        </div>

        {/* divider */}
        <div style={{ width: 1, height: 40, backgroundColor: '#dee2e6' }} />

        {/* Male */}
        <div className="text-center">
          <div>
            <span 
              className="d-inline-block mb-1" 
              style={{
                width: 40, height: 4, 
                backgroundColor: '#FFA500',
                borderRadius: 2
              }}
            />
          </div>
          <div className="text-muted small">Male Students</div>
          <div className="fw-bold">1,05,000</div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default StudentsChart;
