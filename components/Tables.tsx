import React from 'react';
import { TableHeader, MetricsTableProps } from '@/types/index';

export const Tables: React.FC<MetricsTableProps> = ({ headers, body }) => {
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
                    {body.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {/* Iterate over headers to ensure the order of cells matches the headers */}
                            {headers.map((header) => (
                                <td
                                    key={header.key}
                                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                >
                                    {row[header.key as keyof typeof row] ?? 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
