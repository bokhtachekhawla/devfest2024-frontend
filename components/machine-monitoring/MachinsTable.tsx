/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
// import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { MachineData, MachineTableProps } from '@/types/index'
import { FilterCard } from './FilterCard'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import api from "@/lib/axios"
// import MyComponent from '@/utils/fetchDataInterval'
import Link from 'next/link'

export const StatsTable: React.FC<MachineTableProps> = ({ data: initialData }) => {
  const [filteredData, setFilteredData] = useState<MachineData[]>(initialData)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<MachineData | null>(null);
  // const [sensorData, setSensorData] = useState<SensorReading[]>([]);
  // const [isLoadingSensorData, setIsLoadingSensorData] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Modal

  useEffect(() => {
    setFilteredData(initialData);
  }, [initialData]);

  const toggleModal = async (machine: MachineData | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedMachine(machine);
    // if (machine) {
    //   await fetchSensorData(machine.id);
    // } 
    // else {
    //   setSensorData([]);
    // }
  };

  // const fetchSensorData = async (machineId: number) => {
  //   // setIsLoadingSensorData(true);
  //   try {
  //     const response = await api.get(`/api/sensor-readings?machine_id=${machineId}`);
  //     // setSensorData(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching sensor data:', error);
  //     setSensorData([]);
  //   } finally {
  //     setIsLoadingSensorData(false);
  //   }
  // };

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

  const handleDelete = (machine: MachineData) => {
    setSelectedMachine(machine);
    setIsDeleteModalOpen(true); // Open delete modal
  };

  const handleDeleteConfirm = async () => {
    if (!selectedMachine) return;

    try {
      const response = await api.delete(`/api/machines/${selectedMachine.id}`);
      if (response.status === 200) {
        const updatedData = filteredData.filter(machine => machine.id !== selectedMachine.id);
        setFilteredData(updatedData);
        setIsDeleteModalOpen(false);
        setSelectedMachine(null);
      }
    } catch (error) {
      console.error('Error deleting machine:', error);
    }
  };

  const handleFilterChange = (filters: { type: string; status: string }) => {
    const newFilteredData = initialData.filter((machine) => {
      const typeMatch = !filters.type || machine.machine_type === filters.type
      const statusMatch = !filters.status || machine.status === filters.status
      return typeMatch && statusMatch
    })
    setFilteredData(newFilteredData)
  }

  // const renderSensorData = (reading: SensorReading) => {
  //   const sensorData = JSON.parse(reading.sensor_data);
  //   return (
  //     <div key={reading.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
  //       <p><strong>Reading Time:</strong> {new Date(reading.reading_time).toLocaleString()}</p>
  //       {Object.entries(sensorData).map(([key, value]) => (
  //         <p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {JSON.stringify(value)}</p>
  //       ))}
  //     </div>
  //   );
  // };

  const handleEdit = (machine: MachineData) => {
    setSelectedMachine(machine);
    setIsEditModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedMachine) return;

    const formData = new FormData(e.currentTarget);
    const formatDate = (date: string) => {
      const d = new Date(date);
      const pad = (n: number) => (n < 10 ? '0' + n : n);
      const hours = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
    };
    const updatedMachine = {
      machine_name: formData.get('machine_name') as string,
      last_maintenance: formatDate(formData.get('last_maintenance') as string),
    };

    try {
      const response = await api.put(`/api/machines/${selectedMachine.id}`, updatedMachine);
      if (response.status === 200) {
        const updatedData = filteredData.map(machine =>
          machine.id === selectedMachine.id ? { ...machine, ...updatedMachine } : machine
        );
        setFilteredData(updatedData);
        setIsEditModalOpen(false);
        setSelectedMachine(null);
      }
    } catch (error) {
      console.error('Error updating machine:', error);
    }
  };
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };
  const handleSaveAddMachine = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formatDate = (date: string) => {
      const d = new Date(date);
      const pad = (n: number) => (n < 10 ? '0' + n : n);
      const hours = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
    };
    const newMachine = {
      machine_name: formData.get('machine_name') as string,
      machine_type: formData.get('machine_type') as string,
      status: formData.get('status') as string,
      last_maintenance: formatDate(formData.get('last_maintenance') as string),
      first_usage: formatDate(formData.get('first_usage') as string),
    };  

    try {
      const response = await api.post('/api/machines', newMachine);
      if (response.status === 201) {
        const updatedData = [...filteredData, response.data];
        setFilteredData(updatedData);
        setIsAddModalOpen(false);
      }
    } catch (error) {
      console.error('Error adding machine:', error);
    }
  };

  return (
    // <div className='flex h-full gap-2'>
    <div className="flex flex-col md:flex-row p-4 gap-4">

      {/* <div> */}
      <div className="md:w-1/3 xl:w-1/4 w-full flex flex-col gap-4">
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
                  <a
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Details"
                    href={`/machine-monitoring/${machine.id}`}
                  >
                    <DetailsIcon />
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Edit"
                    onClick={() => handleEdit(machine)}
                  >
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Delete"
                    onClick={() => handleDelete(machine)}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {isModalOpen && selectedMachine && (
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
       */}

{/* {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => toggleModal()} className="text-gray-500">Back</button>
              <h2 className="text-xl font-semibold text-purple_button">{selectedMachine.machine_name}</h2>
              <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
            <h3 className="text-lg font-semibold mb-2">Sensor Readings</h3>
            <MyComponent machineId={selectedMachine.id} />
          </div>
        </div>
      )} */}

{isModalOpen && selectedMachine && (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => toggleModal()} className="text-gray-500">Back</button>
                
                {/* Link to navigate to machine-monitoring page with the selected machine ID */}
                <Link href={`/machine-monitoring/${selectedMachine.id}`}>
                    <h2 className="text-xl font-semibold text-purple_button cursor-pointer">
                        View {selectedMachine.machine_name} Details
                    </h2>
                </Link>

                <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
        </div>
    </div>
)}

{/* 
{isModalOpen && selectedMachine && (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => toggleModal()} className="text-gray-500">Back</button>

                <Link href={`/machine-monitoring/${selectedMachine.id}`}>
                    <h2 className="text-xl font-semibold text-purple_button cursor-pointer">
                        {selectedMachine.machine_name}
                    </h2>
                </Link>

                <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">Sensor Readings</h3>
            <MyComponent machineId={selectedMachine.id} />
        </div>
    </div>
)} */}

      {/* Delete Modal */}
      {isDeleteModalOpen && selectedMachine && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete <strong>{selectedMachine.machine_name}</strong>? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {isEditModalOpen && selectedMachine && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-box p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
            <h3 className="font-bold text-2xl text-purple_logo mb-6">Edit Machine</h3>
            <form onSubmit={handleSave}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Machine Name</label>
                  <input
                    type="text"
                    name="machine_name"
                    defaultValue={selectedMachine.machine_name}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter machine name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Last Maintenance</label>
                  <input
                    type="datetime-local"
                    name="last_maintenance"
                    defaultValue={new Date(selectedMachine.last_maintenance).toISOString().slice(0, 16)}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    title="Last Maintenance Date and Time"
                    placeholder="Enter last maintenance date and time"
                  />
                </div>
              </div>
              <div className="modal-action flex justify-end space-x-4 mt-6">
                <button type="submit" className="bg-blue_logo text-white py-2 px-4 rounded-md hover:bg-purple_button transition">
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Add Machine</h3>
            <form onSubmit={handleSaveAddMachine}>
              <div className="mb-4">
                <label htmlFor="machine_name" className="block text-sm font-medium text-gray-700">Machine Name</label>
                <input type="text" id="machine_name" name="machine_name" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="machine_type" className="block text-sm font-medium text-gray-700">Machine Type</label>
                <input type="text" id="machine_type" name="machine_type" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select id="status" name="status" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md">
                  <option value="running">Running</option>
                  <option value="idle">Idle</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="last_maintenance" className="block text-sm font-medium text-gray-700">Last Maintenance</label>
                <input type="datetime-local" id="last_maintenance" name="last_maintenance" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="first_usage" className="block text-sm font-medium text-gray-700">First Usage</label>
                <input type="datetime-local" id="first_usage" name="first_usage" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
              </div>
              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue_logo text-white py-2 px-4 rounded-md">Add</button>
                <button type="button" className="bg-gray-300 text-black py-2 px-4 rounded-md" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}