// components/StatisticsSidebar.tsx

"use client"; // This line is necessary for client components

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { DeffectData } from '@/data/defectData';

// Register the necessary components from Chart.js
Chart.register(ArcElement, Tooltip, Legend);

interface StatisticsSidebarProps {
  data: DeffectData[];
}

const StatisticsSidebar: React.FC<StatisticsSidebarProps> = ({ data }) => {
  // Process your data to create the chart data
  const defectCounts = data.reduce((acc, defect) => {
    acc[defect.defect_type] = (acc[defect.defect_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(defectCounts),
    datasets: [
      {
        label: 'Defect Counts',
        data: Object.values(defectCounts),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'], // Add colors for the chart
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    
    <aside className={`bg-white shadow-md p-4 lg:rounded-l-lg rounded-lg`}>
      <h2>Defect Statistics</h2>
      <Pie data={chartData} />
    </aside>
  );
};

export default StatisticsSidebar;