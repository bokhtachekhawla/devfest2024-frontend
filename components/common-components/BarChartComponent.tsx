import React from 'react';
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
            <ResponsiveContainer width="100%" height={300}>
                {data && data.length > 0 ? (
                    <RechartsBarChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        {/* Grid lines */}
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

                        {/* Dynamically determine which key to use for the XAxis */}
                        <XAxis
                            dataKey={data[0].map ? 'map' : data[0].rank ? 'rank' : 'name'}
                            stroke="#333"
                            tick={{ fontSize: 12, fill: '#666' }}
                            tickLine={false}
                            axisLine={{ stroke: '#ccc' }}
                            label={{ value: "Days", position: 'insideBottom', offset: -10 }}
                        />

                        {/* Y Axis styling */}
                        <YAxis
                            stroke="#333"
                            tick={{ fontSize: 12, fill: '#666' }}
                            tickLine={false}
                            axisLine={{ stroke: '#ccc' }}
                            label={{ value: "Production (units)", angle: -90, position: 'insideLeft', offset: 0 }}
                        />

                        {/* Tooltip styling */}
                        <Tooltip
                            contentStyle={{
                                background: '#fff',
                                border: '1px solid #ccc',
                                fontFamily: "'Barlow Condensed', sans-serif",
                            }}
                            labelStyle={{ color: '#000' }}
                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}  // Add subtle cursor hover effect
                        />

                        {/* Legend styling */}
                        <Legend
                            wrapperStyle={{
                                color: '#666',
                                fontFamily: "'Barlow Condensed', sans-serif",
                            }}
                        />

                        {/* Bars with dynamic bar size */}
                        <Bar
                            dataKey={dataKey}
                            fill={color}
                            barSize={Math.max(30, data.length * 5)} // Dynamic bar size
                            radius={[10, 10, 0, 0]} // Rounded bar corners
                        />
                    </RechartsBarChart>
                ) : (
                    <div className="text-center text-gray-500">No data available</div>
                )}
            </ResponsiveContainer>
        </div>
    );
};
