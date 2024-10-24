"use client"

import React, { useState, useEffect } from 'react'
import { MachineData, MachineTableProps, SensorReading } from '../../types/index'
import { FilterCard } from './FilterCard'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import api from "@/lib/axios"

export const StatsTable: React.FC<MachineTableProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<MachineData[]>(data)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<MachineData | null>(null);
  const [sensorData, setSensorData] = useState<SensorReading[]>([]);
  const [isLoadingSensorData, setIsLoadingSensorData] = useState(false);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const toggleModal = async (machine: MachineData | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedMachine(machine);
    if (machine) {
      await fetchSensorData(machine.id);
    } else {
      setSensorData([]);
    }
  };

  const fetchSensorData = async (machineId: number) => {
    setIsLoadingSensorData(true);
    try {
      const response = await api.get(`/api/sensor-readings?machine_id=${machineId}`);
      setSensorData(response.data.data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
      setSensorData([]);
    } finally {
      setIsLoadingSensorData(false);
    }
  };

  const getStatusColor = (status: MachineData['status']) => {
    switch (status) {
      case 'running':
        return 'text-purple-600'
      case 'idle':
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

  const handleFilterChange = (filters: { type: string; status: string }) => {
    const newFilteredData = data.filter((machine) => {
      const typeMatch = !filters.type || machine.machine_type === filters.type
      const statusMatch = !filters.status || machine.status === filters.status
      return typeMatch && statusMatch
    })
    setFilteredData(newFilteredData)
  }

  const renderSensorData = (reading: SensorReading) => {
    const sensorData = JSON.parse(reading.sensor_data);
    return (
      <div key={reading.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p><strong>Reading Time:</strong> {new Date(reading.reading_time).toLocaleString()}</p>
        {Object.entries(sensorData).map(([key, value]) => (
          <p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {JSON.stringify(value)}</p>
        ))}
      </div>
    );
  };

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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{machine.machine_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.machine_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(machine.last_maintenance).toLocaleDateString()}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusColor(machine.status)}`}>
                  {machine.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center  justify-center" >
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Details"
                    onClick={() => toggleModal(machine)}
                  >
                    <DetailsIcon />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Edit"
                    onClick={() => {}}
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

      {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => toggleModal()} className="text-gray-500">Back</button>
              <h2 className="text-xl font-semibold text-purple_button">{selectedMachine.machine_name}</h2>
              <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sensor Readings</h3>
              {isLoadingSensorData ? (
                <p>Loading sensor data...</p>
              ) : sensorData.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  {sensorData.map(renderSensorData)}
                </div>
              ) : (
                <p>No sensor data available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}