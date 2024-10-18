import React from 'react'
import { ChartCardProps } from '@/types/index'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ChartCard: React.FC<ChartCardProps> = ({ title, data, dataKey, color }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}