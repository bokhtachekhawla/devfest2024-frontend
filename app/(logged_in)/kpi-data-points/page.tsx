'use client'

import React from 'react'
import { ChartCard } from '@/components/common-components/ChartComponent'
import { ChartCardProps } from '@/types/index'

export default function DashboardKPI() {
    const chartData: Array<ChartCardProps> = [
        {
          title: 'Stamping Press Efficiency',
          data: [
            { name: '10:00 AM', value: 85, status: 0 },
            { name: '11:00 AM', value: 82, status: 0 },
            { name: '12:00 PM', value: 76, status: 1 },
            { name: '1:00 PM', value: 78, status: 1 },
            { name: '2:00 PM', value: 84, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Welding Robot Efficiency',
          data: [
            { name: '10:00 AM', value: 90, status: 0 },
            { name: '11:00 AM', value: 88, status: 0 },
            { name: '12:00 PM', value: 72, status: 1 },
            { name: '1:00 PM', value: 75, status: 1 },
            { name: '2:00 PM', value: 80, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'CNC Machine Utilization',
          data: [
            { name: '10:00 AM', value: 70, status: 0 },
            { name: '11:00 AM', value: 75, status: 1 },
            { name: '12:00 PM', value: 68, status: 0 },
            { name: '1:00 PM', value: 72, status: 1 },
            { name: '2:00 PM', value: 65, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Painting Robot Performance',
          data: [
            { name: '10:00 AM', value: 88, status: 0 },
            { name: '11:00 AM', value: 65, status: 1 },
            { name: '12:00 PM', value: 85, status: 0 },
            { name: '1:00 PM', value: 90, status: 0 },
            { name: '2:00 PM', value: 83, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Assembly Line Speed',
          data: [
            { name: '10:00 AM', value: 110, status: 0 },
            { name: '11:00 AM', value: 115, status: 0 },
            { name: '12:00 PM', value: 98, status: 1 },
            { name: '1:00 PM', value: 105, status: 0 },
            { name: '2:00 PM', value: 112, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Quality Control Defect Rate',
          data: [
            { name: '10:00 AM', value: 3, status: 0 },
            { name: '11:00 AM', value: 5, status: 1 },
            { name: '12:00 PM', value: 4, status: 0 },
            { name: '1:00 PM', value: 3, status: 0 },
            { name: '2:00 PM', value: 2, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Material Waste Percentage',
          data: [
            { name: '10:00 AM', value: 1.5, status: 0 },
            { name: '11:00 AM', value: 2.0, status: 1 },
            { name: '12:00 PM', value: 1.8, status: 0 },
            { name: '1:00 PM', value: 1.3, status: 0 },
            { name: '2:00 PM', value: 1.6, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Machine Downtime',
          data: [
            { name: '10:00 AM', value: 5, status: 1 },
            { name: '11:00 AM', value: 3, status: 0 },
            { name: '12:00 PM', value: 4, status: 0 },
            { name: '1:00 PM', value: 2, status: 0 },
            { name: '2:00 PM', value: 6, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Operator Efficiency',
          data: [
            { name: '10:00 AM', value: 95, status: 0 },
            { name: '11:00 AM', value: 80, status: 1 },
            { name: '12:00 PM', value: 92, status: 0 },
            { name: '1:00 PM', value: 85, status: 1 },
            { name: '2:00 PM', value: 90, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Inventory Turnover Rate',
          data: [
            { name: '10:00 AM', value: 50, status: 0 },
            { name: '11:00 AM', value: 47, status: 0 },
            { name: '12:00 PM', value: 30, status: 1 },
            { name: '1:00 PM', value: 32, status: 0 },
            { name: '2:00 PM', value: 45, status: 0 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Production Yield Rate',
          data: [
            { name: '10:00 AM', value: 98, status: 0 },
            { name: '11:00 AM', value: 85, status: 0 },
            { name: '12:00 PM', value: 78, status: 1 },
            { name: '1:00 PM', value: 81, status: 0 },
            { name: '2:00 PM', value: 79, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Maintenance Cost per Unit',
          data: [
            { name: '10:00 AM', value: 12, status: 0 },
            { name: '11:00 AM', value: 15, status: 1 },
            { name: '12:00 PM', value: 10, status: 0 },
            { name: '1:00 PM', value: 13, status: 0 },
            { name: '2:00 PM', value: 14, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        },
        {
          title: 'Energy Consumption per Unit',
          data: [
            { name: '10:00 AM', value: 100, status: 0 },
            { name: '11:00 AM', value: 125, status: 1 },
            { name: '12:00 PM', value: 95, status: 0 },
            { name: '1:00 PM', value: 110, status: 0 },
            { name: '2:00 PM', value: 120, status: 1 }
          ],
          dataKey: 'value',
          color: '#8884d8',
          chartType: 'line'
        }
      ];
      

      return (
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {chartData.map((chart, index) => (
            <ChartCard
              key={index}
              title={chart.title}
              data={chart.data}
              dataKey={chart.dataKey}
              color={chart.color}
            />
          ))}
        </div>
      );
}
