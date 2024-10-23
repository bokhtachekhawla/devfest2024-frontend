"use client"
import React, { useState } from 'react'
import { MachineData, MachineTableProps } from '../../types/index'
import { FilterCard } from './FilterCard'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Image from 'next/image'

export const StatsTable: React.FC<MachineTableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<MachineData[]>(data)
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = () => setIsModalOpen(!isModalOpen);

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

  const DetailsIcon = () => (
    <Image
    alt='details-icon'
    src="/image.png"
    height={20}
    width={20}
    />

  );
  const machineMockData = {
    machine_name: "Machine001",
    test_pressure: 5.0,
    leak_rate: 0.0,
    test_duration: 45,
    temperature: 25,
    status: "pass",
    fluid_type: "air",
    seal_condition: "good",
    test_cycle_count: 1500,
    timestamp: "2024-10-14 10:50:00"
  };
  const handleFilterChange = (filters: { type: string; status: string }) => {
    const newFilteredData = data.filter((machine) => {
      const typeMatch = !filters.type || machine.type === filters.type
      const statusMatch = !filters.status || machine.status === filters.status
      return typeMatch && statusMatch
    })
    setFilteredData(newFilteredData)
  }

  return (
    <div className='flex h-full gap-2'>
      <div>
      <div className='flex flex-col space-y-4 mb-4'>
        <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Add Machine
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.type}</td>
                 */}

<td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center  justify-center" >
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Details"
                    onClick={toggleModal}
                  >
                    {/* <FaEdit className="mr-1" />  */}
                    <DetailsIcon />

                  </button>
                </td>

                {isModalOpen && (
                <div className="fixed inset-0 bg-gray-200 bg-opacity-80   min-h-screen flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:max-w-lg">
                        <div className="flex justify-between items-center mb-4">
                            <button onClick={toggleModal} className="text-gray-500">Back</button>
                            <h2 className="text-xl font-semibold text-purple_button">Machine {machine.name}</h2>
                            <button onClick={toggleModal} className="text-gray-500">X</button>
                        </div>

                        <div>
                        <ul className="text-gray-600">
          <li><strong>test_pressure</strong>: {machineMockData.test_pressure}</li>
          <li><strong>leak_rate</strong>: {machineMockData.leak_rate}</li>
          <li><strong>test_duration</strong>: {machineMockData.test_duration}</li>
          <li><strong>temperature</strong>: {machineMockData.temperature}</li>
          <li><strong>status</strong>: {machineMockData.status}</li>
          <li><strong>fluid_type</strong>: {machineMockData.fluid_type}</li>
          <li><strong>seal_condition</strong>: {machineMockData.seal_condition}</li>
          <li><strong>test_cycle_count</strong>: {machineMockData.test_cycle_count}</li>
          <li><strong>timestamp</strong>: {machineMockData.timestamp}</li>
        </ul>

                        </div>
                        


                        
                    </div>
                </div>

    //     <div className="bg-gray-800 bg-opacity-80 min-h-screen flex items-center justify-center">
    //   <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
    //     <button className="absolute top-4 left-4 text-blue-600">Back</button>
    //     <button className="absolute top-4 right-4 text-red-600">X</button>

    //     <h1 className="text-2xl font-bold text-purple-600 mb-4 text-center">
    //       {machineMockData.machine_name}
    //     </h1>
    //     <ul className="text-gray-600 space-y-1">
    //       <li><strong>test_pressure</strong>: {machineMockData.test_pressure}</li>
    //       <li><strong>leak_rate</strong>: {machineMockData.leak_rate}</li>
    //       <li><strong>test_duration</strong>: {machineMockData.test_duration}</li>
    //       <li><strong>temperature</strong>: {machineMockData.temperature}</li>
    //       <li><strong>status</strong>: {machineMockData.status}</li>
    //       <li><strong>fluid_type</strong>: {machineMockData.fluid_type}</li>
    //       <li><strong>seal_condition</strong>: {machineMockData.seal_condition}</li>
    //       <li><strong>test_cycle_count</strong>: {machineMockData.test_cycle_count}</li>
    //       <li><strong>timestamp</strong>: {machineMockData.timestamp}</li>
    //     </ul>
    //   </div>
    // </div>
            )}

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Edit"
                    onClick={() =>{} }
                  >
                    <FaEdit className="mr-1" /> 
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Delete"
                    onClick={() => {}}
                  >
                    <FaTrash className="mr-1" /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}