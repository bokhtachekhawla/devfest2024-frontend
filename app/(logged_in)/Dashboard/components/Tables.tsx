import React from 'react';
import { TableHeader , MetricsTableProps } from '@/types/index';

export const Tables: React.FC<MetricsTableProps> = ({ headers }) => {
    return (
        <div>
            <table className="w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header.key}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* {filteredData.map((machine) => (
                        <tr key={machine.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Machine {machine.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.temperature} C°</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.vibration} db</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.energy} kWatt</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{machine.type}</td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getStatusColor(machine.status)}`}>
                                {machine.status}
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};
