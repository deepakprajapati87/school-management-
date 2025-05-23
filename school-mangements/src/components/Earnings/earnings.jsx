import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { HeadingThree } from '../headingThree/headingThree';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const EarningsChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Total Collections',
                data: [0, 20, 50, 70, 60, 80, 75],
                fill: true,
                backgroundColor: 'rgba(66, 133, 244, 0.5)',
                borderColor: 'rgba(66, 133, 244, 1)',
                tension: 0.4,
            },
            {
                label: 'Fees Collection',
                data: [0, 50, 20, 40, 70, 50, 65],
                fill: true,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgba(255, 0, 0, 1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: (value) => `${value}k`,
                },
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div className='earnings'>
            <div className="card">
                <div className='item-title'>
               
                 <HeadingThree title='Earnings'/>
                </div>
               
                <div className="d-flex justify-content-between mb-3">
                    <div className='collections'>
                        
                        <h4>Total Collections </h4>
                        <span>75,000</span>
                    </div>
                    <div className='collections collections2'>
                       
                        <h4>Fees Collection</h4>
                        <span>$15,000</span>
                    </div>
                    <div className="text-muted">Jan 20, 2019</div>
                </div>
                <Line data={data} options={options} />
            </div>
        </div>

    );
};

export default EarningsChart;
