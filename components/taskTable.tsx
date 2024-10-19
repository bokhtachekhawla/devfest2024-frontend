import React from 'react';
import { TableHeader, MetricsTableProps } from '@/types/index';

export const TaskTable: React.FC<MetricsTableProps> = ({ headers, body }) => {
    // Function to get the status color based on status value
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'in progress':
                return 'text-orange-500';
            case 'undone':
                return 'text-red-500';
            case 'done':
                return 'text-green-500';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-end gap-4 mb-3">
                <button className="bg-purple_button text-white py-2 px-7 rounded hover:bg-purple-700">
                    Edit Task
                </button>
                <button className="bg-purple_button text-white py-2 px-7 rounded hover:bg-purple-700">
                    Delete Task
                </button>
            </div>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
