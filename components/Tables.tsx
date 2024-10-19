import React, { useState } from 'react';
import { MetricsTableProps } from '@/types/index';
import { FaTrash } from 'react-icons/fa';

export const Tables: React.FC<MetricsTableProps> = ({ headers, body }) => {
    const [tableData, setTableData] = useState(body);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [rowToDelete, setRowToDelete] = useState<number | null>(null);

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

    const handleOpenDeleteModal = (rowIndex: number) => {
        setRowToDelete(rowIndex);
        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        if (rowToDelete !== null) {
            const updatedData = tableData.filter((_, index) => index !== rowToDelete);
            setTableData(updatedData);
        }
        setShowDeleteModal(false);
        setRowToDelete(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header: { key: string; label: string }) => (
                            <th
                                key={header.key}
                                className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                                    header.label === 'Task Description' ? 'text-green-500' :
                                    header.label === 'Anomalies' ? 'text-red-500' :
                                    'text-gray-500'
                                }`}
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {headers.map((header) => {
                                const cellValue = row[header.key as keyof typeof row];
                                const displayValue =
                                    cellValue === null || cellValue === undefined
                                        ? header.key === 'shift' || header.key === 'output' || header.key === 'energy'
                                            ? '-' // Custom display for these fields
                                            : 'N/A'
                                        : String(cellValue);
                                
                                if (header.key === 'status' || header.key === 'delete') {
                                    return (
                                        <td
                                            key={header.key}
                                            className={`px-4 py-4 whitespace-nowrap text-sm font-medium ${getStatusColor(displayValue)}`}
                                        >
                                            {
                                                header.key === 'delete' ? (
                                                <button
                                                    type="button"
                                                    className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                                                    aria-label="Delete"
                                                    onClick={() => handleOpenDeleteModal(rowIndex)}
                                                >
                                                    <FaTrash className="mr-1" /> Delete
                                                </button>
                                                ) : header.key === 'status' ? (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                        {displayValue}
                                                    </span>
                                                    ) : header.key === 'Reports' ? (
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            View
                                                        </a>
                                                       ) : null    
                                            }
                                        </td>
                                    );
                                }
                                return (
                                    <td key={header.key} className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {displayValue}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md max-w-sm">
                        <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
                        <p className="mb-6">Are you sure you want to delete this row?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                                onClick={() => setShowDeleteModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
