import React from 'react'
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { BarChartCardProps } from '../../types/index';
export const BarChartComponent: React.FC<BarChartCardProps> = ({ title, data, dataKey, color }) => {
    return (
<div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-black mb-4 uppercase tracking-wide">{title}</h3>
      <ResponsiveContainer width="100%" height={255}>
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          {/* Dynamically determine which key to use for the XAxis */}
          <XAxis
            dataKey={data[0].map ? 'map' : data[0].rank ? 'rank' : 'name'}
            stroke="#666"
          />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              background: '#fff',
              border: '1px solid #ccc',
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
            labelStyle={{ color: '#000' }}
          />
          <Legend
            wrapperStyle={{
              color: '#666',
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          />
          {/* Dynamic color for the Bar */}
          <Bar dataKey={dataKey} fill={color} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
    )
}

