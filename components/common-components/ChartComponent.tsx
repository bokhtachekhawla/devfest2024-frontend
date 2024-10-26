import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot
} from 'recharts';

interface ChartCardProps {
  title: string;
  data: Array<{
    name: string;
    value: number;
    status: number;
  }>;
  dataKey: string;
  color: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, data, dataKey, color }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
      <ResponsiveContainer width="100%" height={255}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`color${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine />
          <YAxis axisLine />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            fillOpacity={0.4}
            fill={`#8884d8`}
          />
          {data.map((entry, index) => (
            entry.status === 1 && (
              <ReferenceDot
                key={`dot-${index}`}
                x={entry.name}
                y={entry.value}
                r={4}
                fill="red"
                stroke="none"
              />
            )
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};