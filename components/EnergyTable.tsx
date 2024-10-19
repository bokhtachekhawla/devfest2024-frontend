import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {energyData} from '@/constants/index'
import { EnergyData ,EnergyTableProps } from '@/types/index'

const EnergyTable: React.FC<EnergyTableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex-grow overflow-auto custom-scrollbar">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Consumption chart</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Energy Usage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((machine, index) => (
            <tr key={machine.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {machine.name}
              </td>
              <td className="px-6 py-4">
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={machine.energyConsumption}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" hide />
                      <YAxis hide />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {machine.lastEnergyUsage} kWatt
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const EnergyTables: React.FC = () => {
  return <EnergyTable data={energyData} />;
};

export default EnergyTables;