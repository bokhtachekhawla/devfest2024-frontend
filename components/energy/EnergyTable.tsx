import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnergyData, EnergyTableProps } from '@/types/index';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from "@/lib/axios";

const EnergyTable: React.FC<EnergyTableProps> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<EnergyData | null>(null);
  const [energyChartData, setEnergyChartData] = useState<{ [key: number]: any[] }>({});

  useEffect(() => {
    const fetchEnergyData = async () => {
      const energyData: { [key: number]: any[] } = {};
      for (const machine of data) {
        try {
          const response = await api.get(`/api/energy-usage?machine_id=${machine.id}`);
          const chartData = response.data.data.map((item: any) => ({
            time: new Date(item.start_shift_time).toLocaleString(),
            value: item.energy_consumed
          }));
          energyData[machine.id] = chartData;
        } catch (error) {
          console.error(`Error fetching energy data for machine ${machine.id}:`, error);
          energyData[machine.id] = [];
        }
      }
      setEnergyChartData(energyData);
    };

    fetchEnergyData();
  }, [data]);

  const handleEdit = (machine: EnergyData) => {
    setSelectedMachine(machine);
    setEditModalOpen(true);
  };

  const handleDelete = (machine: EnergyData) => {
    setSelectedMachine(machine);
    setDeleteModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedMachine) return;

    const formData = new FormData(e.currentTarget);
    const updatedMachine = {
      energy_consumed: parseFloat(formData.get('energy_consumed') as string),
      start_shift_time: formData.get('start_shift_time') as string,
      end_shift_time: formData.get('end_shift_time') as string,
    };

    try {
      const response = await api.put(`/api/energy-usage/${selectedMachine.id}`, updatedMachine);
      if (response.status === 200) {
        const updatedData = data.map(machine =>
          machine.id === selectedMachine.id ? { ...machine, ...updatedMachine } : machine
        );
        setData(updatedData);
        setEditModalOpen(false);
        setSelectedMachine(null);
      }
    } catch (error) {
      console.error('Error updating energy usage:', error);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedMachine) {
      try {
        const response = await api.delete(`/api/energy-usage/${selectedMachine.id}`);
        if (response.status === 200) {
          const updatedData = data.filter(machine => machine.id !== selectedMachine.id);
          setData(updatedData);
          setDeleteModalOpen(false);
          setSelectedMachine(null);
        }
      } catch (error) {
        console.error('Error deleting energy usage:', error);
      }
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md flex-grow overflow-auto custom-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
              <th className="px-6 py-3 w-64 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Energy Consumption Chart</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Consumed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Shift Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Shift Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((machine, index) => (
              <tr key={machine.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {machine.machine_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {machine.machine_type}
                </td>
                <td className="px-3 py-4 m-auto">
                  <div className="h-40 w-64 ">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={energyChartData[machine.id] || []}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {machine.energy_consumed} kWatt
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(machine.start_shift_time).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(machine.end_shift_time).toLocaleString()}
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

        {/* Edit Modal */}
        {isEditModalOpen && selectedMachine && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-box p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
              <h3 className="font-bold text-2xl text-purple_logo mb-6">Edit Energy Usage</h3>
              <form onSubmit={handleSave}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text_black mb-1">Energy Consumed (kWatt)</label>
                    <input
                      type="number"
                      name="energy_consumed"
                      defaultValue={selectedMachine.energy_consumed}
                      className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                      required
                      step="0.01"
                      placeholder="Enter energy consumed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text_black mb-1">Start Shift Time</label>
                    <input
                      type="datetime-local"
                      name="start_shift_time"
                      defaultValue={new Date(selectedMachine.start_shift_time).toISOString().slice(0, 16)}
                      className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text_black mb-1">End Shift Time</label>
                    <input
                      type="datetime-local"
                      name="end_shift_time"
                      defaultValue={new Date(selectedMachine.end_shift_time).toISOString().slice(0, 16)}
                      className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                      required
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
                    onClick={() => setEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-box p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
              <h3 className="font-bold text-2xl text-red-600 mb-4">Delete Energy Usage</h3>
              <p className="py-4 text-text_black">Are you sure you want to delete this energy usage record?</p>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                  onClick={handleConfirmDelete}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnergyTable;