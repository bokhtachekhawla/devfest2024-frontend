import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnergyData, EnergyTableProps } from '@/types/index';
import { FaEdit, FaTrash } from 'react-icons/fa';

const EnergyTable: React.FC<EnergyTableProps> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData); // Store data in a state
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<EnergyData | null>(null);

  const handleEdit = (machine: EnergyData) => {
    setSelectedMachine(machine);
    setEditModalOpen(true);
  };

  const handleDelete = (machine: EnergyData) => {
    setSelectedMachine(machine);
    setDeleteModalOpen(true);
  };

  const handleSave = (newData: EnergyData) => {
    const updatedData = data.map(machine =>
      machine.id === newData.id ? newData : machine
    );
    setData(updatedData);
    setEditModalOpen(false);
    setSelectedMachine(null);
  };

  const handleConfirmDelete = () => {
    if (selectedMachine) {
      const updatedData = data.filter(machine => machine.id !== selectedMachine.id);
      setData(updatedData);
      setDeleteModalOpen(false);
      setSelectedMachine(null);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md flex-grow overflow-auto custom-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Energy Consumption chart</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Energy Usage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-box p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
              <h3 className="font-bold text-2xl text-purple_logo mb-6">Edit Machine</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const updatedMachine: EnergyData = {
                    id: selectedMachine?.id || '',
                    name: formData.get('name') as string,
                    lastEnergyUsage: parseFloat(formData.get('lastEnergyUsage') as string),
                    energyConsumption: selectedMachine?.energyConsumption || [],
                  };
                  handleSave(updatedMachine);
                }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text_black mb-1">Machine Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={selectedMachine?.name}
                      className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                      required
                      placeholder="Enter machine name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text_black mb-1">Last Energy Usage (kWatt)</label>
                    <input
                      type="number"
                      name="lastEnergyUsage"
                      defaultValue={selectedMachine?.lastEnergyUsage}
                      className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                      required
                      title="Last Energy Usage"
                      placeholder="Enter last energy usage"
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
              <h3 className="font-bold text-2xl text-red-600 mb-4">Delete Machine</h3>
              <p className="py-4 text-text_black">Are you sure you want to delete this machine?</p>
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
