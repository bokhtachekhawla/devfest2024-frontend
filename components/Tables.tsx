import React from 'react';
import { TableHeader, MetricsTableProps } from '@/types/index';

export const Tables: React.FC<MetricsTableProps> = ({ headers, body }) => {
    // Function to get the status color based on status value
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
        <div className='flex flex-col md:flex-row p-4'>
            {/* Sidebar or additional content can go here (like the defect logging example) */}
            <div className="mb-4 md:mb-0 md:w-1/3 xl:mr-2 lg:mr-2 flex flex-col gap-2">
                {/* You can insert sidebar components or progress bars here */}
                {/* For now, leaving this blank */}
            </div>

            {/* The table section with scrollable functionality */}
            <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0 mt-8">
                <table className="w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr>
                            {headers.map((header) => (
                                <th
                                    key={header.key}
                                    className={`px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider ${
                                        header.label === 'Task Description' ? 'text-green-500' : 
                                        header.label === 'Anomalies' ? 'text-red-500 ' : 
                                        'text-gray-500'
                                    }`}
                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {body.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {headers.map((header) => {
                                    if (header.key === 'status') {
                                        return (
                                            <td
                                                key={header.key}
                                                className={`px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium ${getStatusColor((row[header.key as keyof typeof row] ?? 'N/A') as string)}`}
                                            >
                                                {row[header.key as keyof typeof row] ?? 'N/A'}
                                            </td>
                                        );
                                    }
                                    return (
                                        <td
                                            key={header.key}
                                            className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900"
                                        >
                                            {row[header.key as keyof typeof row] ?? 'N/A'}
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
