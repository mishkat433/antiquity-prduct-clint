import React, { useEffect, useState } from 'react';
import "./Chart.css";
import DonutChart from 'react-donut-chart';


const Chart = () => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        fetch('https://antiquity-server.vercel.app/chartData')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    return (
        <div className='full-chart'>
            <h1 className='dashboard-heading'> Donut Chart</h1>
            <div className='chart'>
                <DonutChart
                    data={chartData}
                />
            </div>

        </div>
    );
};

export default Chart;