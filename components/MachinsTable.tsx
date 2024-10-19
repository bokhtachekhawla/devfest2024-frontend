import React, { useState } from 'react'
import { MachineData, MachineTableProps } from '../types/index'
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
      <div>
      <div className='flex flex-col space-y-4 mb-4'>
        <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Add Machine
                </button>
                <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Edit Machine
                </button>
                <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Delete Machine
                </button>
        </div>
      <FilterCard onFilterChange={handleFilterChange} />
      </div>
     
      <div className="flex-grow overflow-auto custom-scrollbar">
        <table className="w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((machine) => (
              <tr key={machine.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Machine {machine.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(machine.Last_Maintenance).toLocaleDateString()}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusColor(machine.status)}`}>

                  {machine.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}