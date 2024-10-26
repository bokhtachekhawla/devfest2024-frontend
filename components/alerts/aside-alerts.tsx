"use client"; // This line is necessary for client components

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { AlertsType } from '@/data/alerts-data';

// Register the necessary components from Chart.js
Chart.register(ArcElement, Tooltip, Legend);

interface StatisticsSidebarProps {
  data: AlertsType[];
}

const StatisticsSidebar: React.FC<StatisticsSidebarProps> = ({ data }) => {
  // Process your data to create the chart data
  const alertsCounts = data.reduce((acc, alerts) => {
    acc[alerts.machine_type] = (acc[alerts.machine_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(alertsCounts),
    datasets: [
      {
        label: 'Defect Counts',
        data: Object.values(alertsCounts),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'], // Add colors for the chart
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    
    <aside className={`bg-white shadow-md p-4 lg:rounded-l-lg rounded-lg`}>
      <h2>Alerts Statistics</h2>
      <Pie data={chartData} />
    </aside>
  );
};

export default StatisticsSidebar;