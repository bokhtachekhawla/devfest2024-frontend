import React from 'react';
import { MetricsTableProps } from '@/types/index';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const TaskTable: React.FC<MetricsTableProps> = ({ headers, body }) => {
    // Function to get the status color based on status value
    // const getStatusColor = (status: string) => {
    //     switch (status) {
    //         case 'in progress':
    //             return 'text-orange-500';
    //         case 'undone':
    //             return 'text-red-500';
    //         case 'done':
    //             return 'text-green-500';
    //         default:
    //             return 'text-gray-600';
    //     }
    // };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'running':
                return 'text-purple-600';
            case 'ideal':
                return 'text-green-500';
            case 'maintenance':
                return 'text-red-500';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-4">
            <div className="overflow-auto bg-white rounded-lg shadow-lg">
                <table className="w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            {headers.map((header) => (
                                <th
                                    key={header.key}
                                    className={`px-4 py-3 text-left text-sm font-semibold ${
                                        header.label === 'Tasks' ? 'text-purple-600' : 'text-gray-700'
                                    }`}
                                >
                                    {header.label}
                                </th>
                            ))}
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>

                        
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {body.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {headers.map((header) => {
                                    const cellData = row[header.key as keyof typeof row] ?? 'N/A';
                                    
                                    if (header.key === 'status') {
                                        return (
                                            <td
                                                key={header.key}
                                                className={`px-4 py-3 text-sm font-medium ${getStatusColor(cellData as string)}`}
                                            >
                                                {cellData}
                                            </td>
                                        );
                                    }

                                    return (
                                        <td
                                            key={header.key}
                                            className="px-4 py-3 text-sm text-gray-900"
                                        >
                                            {cellData}
                                        </td>
                                        
                                    );
                                })}
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
    );
};
