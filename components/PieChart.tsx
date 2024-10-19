import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Define the colors for the slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const PieChart: React.FC<{ title: string; data: any[]; dataKey: string }> = ({
  title,
  data,
  dataKey,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">{title}</h3>
      <ResponsiveContainer width="100%" height={255}>
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};
