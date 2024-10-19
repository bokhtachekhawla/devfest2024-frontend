import React, { useState } from 'react'
import { MachineData, MachineTableProps } from '../../../../types/index'
import { FilterCard } from './FilterCard'

export const StatsTable: React.FC<MachineTableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<MachineData[]>(data)

  const getStatusColor = (status: MachineData['status']) => {
    switch (status) {
      case 'running':
        return 'text-purple-600'
      case 'ideal':
        return 'text-green-500'
      case 'maintenance':
        return 'text-red-500'
      default:
        return 'text-gray-600'
    }
  }

  const handleFilterChange = (filters: { type: string; status: string }) => {
    const newFilteredData = data.filter((machine) => {
      const typeMatch = !filters.type || machine.type === filters.type
      const statusMatch = !filters.status || machine.status === filters.status
      return typeMatch && statusMatch
    })
    setFilteredData(newFilteredData)
  }

  return (
    <div className='flex h-full gap-4'>
      <FilterCard onFilterChange={handleFilterChange} />
      <div className="flex-grow overflow-auto custom-scrollbar">
        <table className="w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vibration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((machine) => (
              <tr key={machine.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Machine {machine.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.temperature} C°</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.vibration} db</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.energy} kWatt</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.type}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusColor(machine.status)}`}>
                  {machine.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}