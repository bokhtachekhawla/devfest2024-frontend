import React from 'react';
import { ProductionType } from '@/data/production-matrData';

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
      <div className='flex flex-col md:flex-row  w-full justify-between mb-4'>
        <button className='flex-1 text-white bg-purple_button py-2 mx-1 rounded-lg shadow-lg lg:mb-0 mb-4' >
          Add Production
        </button>
        <button className='flex-1 text-white bg-purple_button py-2 mx-1 rounded-lg shadow-lg lg:mb-0 mb-4'>
          Edit Production
        </button>
        <button className='flex-1 text-white bg-purple_button py-2 mx-1 rounded-lg shadow-lg lg:mb-0 mb-4'>
          Delete Production
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineTable;
