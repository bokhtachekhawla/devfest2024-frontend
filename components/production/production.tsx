"use client"
import React from 'react';
import { ProductionType } from '@/data/production-matrData';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoAddCircle } from "react-icons/io5";

interface MachineTableProps {
    data: ProductionType[];
}

// Function to get color based on the progress percentage
const getProgressColor = (current: number, total: number) => {
  const percentage = (current / total) * 100;
  if (percentage <= 50) return 'text-red-500';   // Red for low progress
  if (percentage <= 80) return 'text-yellow-500'; // Yellow for mid-range progress
  return 'text-green-500';                        // Green for good progress
};

export const MachineTable: React.FC<MachineTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <div className='flex flex-col md:flex-row   md:w-full w-64 xs:w-full   justify-end mb-4'>
        <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out  "
                    aria-label="Add"
                    onClick={() =>{} }
                  >
                    <IoAddCircle className="mr-1 w-8 h-8" /> 
                  </button>
        
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Machine</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Output</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((pro: ProductionType, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pro.machine_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.machine_type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.start_time.toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.end_time.toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.output}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={getProgressColor(pro.output, pro.target)}>
                  {` ${pro.output}/${pro.target}`}
                </span>
              </td>

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
  );
};

export default MachineTable;
