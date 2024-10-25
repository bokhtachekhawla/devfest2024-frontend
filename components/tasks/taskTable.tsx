import React from 'react';
import { MetricsTableProps } from '@/types/index';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { TaskData } from '@/types/index'
import api from "@/lib/axios"

export const TaskTable: React.FC<MetricsTableProps> = ({ headers, body }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

    // Open Delete Modal
    const handleDelete = (task: TaskData) => {
        setSelectedTask(task);
        setIsDeleteModalOpen(true);
    };

    // Open Edit Modal
    const handleEdit = (task: TaskData) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };

    // Function to handle Delete confirmation
    const handleDeleteConfirm = async () => {
        if (!selectedTask) return;

        try {
            const response = await api.delete(`/api/tasks/${selectedTask.task_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log(`Task deleted: ${selectedTask.task_id}`);
                // Close modal after action
                setIsDeleteModalOpen(false);
                setSelectedTask(null);
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // Function to handle Edit save
    const handleEditSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedTask) return;
        const formatDate = (date: string) => {
            const d = new Date(date);
            const pad = (n: number) => (n < 10 ? '0' + n : n);
            const hours = d.getHours();
            const minutes = d.getMinutes();
            const seconds = d.getSeconds();
            const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
            return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
          };
        // Construct the updated task data to send to the API
        const updatedTask = {
            task_description: e.currentTarget.taskDescription.value,
            due_date: formatDate(e.currentTarget.dueDate.value),
            status: e.currentTarget.status.value,
            user_id: e.currentTarget.assignedUser.value,  // assuming user_id is the value
        };

        try {
            const response = await api.put(`/api/tasks/${selectedTask.task_id}`, updatedTask, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Task updated:', updatedTask);
                // Close modal after successful save
                setIsEditModalOpen(false);
                setSelectedTask(null);
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };
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
                                    className={`px-4 py-3 text-left text-sm font-semibold ${header.label === 'Tasks' ? 'text-purple-600' : 'text-gray-700'
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
                                                {String(cellData)}
                                            </td>
                                        );
                                    }

                                    return (
                                        <td
                                            key={header.key}
                                            className="px-4 py-3 text-sm text-gray-900"
                                        >
                                            {String(cellData)}
                                        </td>

                                    );
                                })}
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                                    <button
                                        type="button"
                                        className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                                        aria-label="Edit"
                                        onClick={() => handleEdit(row as unknown as TaskData)} // Trigger edit modal
                                    >
                                        <FaEdit className="mr-1" />
                                    </button>
                                    <button
                                        type="button"
                                        className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                                        aria-label="Delete"
                                        onClick={() => handleDelete(row as unknown as TaskData)} // Trigger edit modal
                                    >
                                        <FaTrash className="mr-1" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
                        <form onSubmit={handleEditSave}>
                            {/* Task Description */}
                            <label htmlFor="taskDescription" className="sr-only">Task Description</label>
                            <input
                                id="taskDescription"
                                name="taskDescription"
                                type="text"
                                defaultValue={selectedTask?.task_description}
                                className="border border-gray-300 p-2 rounded-md w-full"
                                required
                                placeholder="Enter task description"
                            />

                            {/* Assign To (User ID) */}
                            <label htmlFor="assignedUser" className="sr-only">Assign To</label>
                            <input
                                id="assignedUser"
                                name="assignedUser"
                                type="number"
                                defaultValue={selectedTask?.user_id}
                                className="border border-gray-300 p-2 rounded-md w-full mt-2"
                                required
                                placeholder="Assign to (User ID)"
                            />

                            {/* Due Date */}
                            <label htmlFor="dueDate" className="sr-only">Due Date</label>
                            <input
                                id="dueDate"
                                name="dueDate"
                                type="datetime-local"
                                defaultValue={selectedTask?.due_date}
                                className="border border-gray-300 p-2 rounded-md w-full mt-2"
                                required
                            />

                            {/* Status */}
                            <label htmlFor="status" className="sr-only">Status</label>
                            <select
                                id="status"
                                name="status"
                                defaultValue={selectedTask?.status}
                                className="border border-gray-300 p-2 rounded-md w-full mt-2"
                                required
                            >
                                <option value="todo">To Do</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-purple-600 text-white rounded-md"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Delete Task</h2>
                        <p>Are you sure you want to delete this task?</p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="mr-4 px-4 py-2 bg-gray-400 text-white rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="px-4 py-2 bg-red-600 text-white rounded-md"
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
