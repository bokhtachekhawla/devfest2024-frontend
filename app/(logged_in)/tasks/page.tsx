"use client";
import { TaskTable } from "@/components/tasks/taskTable";
import { tasktableHeaders } from "@/constants"; // Assuming headers remain the same
import { DashboardProps } from "@/types";
import { TaskData } from '@/types/index';
import { useState, useEffect } from 'react';
import api from "@/lib/axios";

// Define a new interface for the transformed task data
interface TransformedTask {
    anomaly: string | null;
    machine: string; // You may want to define how to derive this from your data
    task: string | null;
    shift: string | null; // You might want to define this
    output: number | null; // Determine how to calculate this
    energy: number | null; // Determine how to calculate this
    assign: string | null; // Define how to derive this
    duedate: string | null;
    type: string; // You may want to define how to derive this from your data
    status: string | null;
    report: string | null; // Define how to derive this from your data
    date: string | null; // Determine how to calculate this
    delete: null; // Update based on your requirements for delete functionality
}

export default function TaskPage({ }: DashboardProps) {
    const [task, setTask] = useState<TaskData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/api/task');
                setTask(response.data.data); // Access the 'data' property of the response
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching tasks:', err);
                setError('Failed to fetch tasks. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Transform the fetched data into the expected format
    const transformedTasks: TransformedTask[] = task.map(taskItem => ({
        anomaly: null, // Define how to derive this if applicable
        machine: 'N/A', // You may want to provide an actual machine value if applicable
        task: taskItem.task_description,
        shift: null, // Define how to derive this
        output: null, // Define how to calculate this
        energy: null, // Define how to calculate this
        assign: null, // Define how to derive this
        duedate: taskItem.due_date,
        type: 'N/A', // Define how to derive this if applicable
        status: taskItem.status,
        report: null, // Define how to derive this if applicable
        date: taskItem.created_at,
        delete: null, // Define your delete functionality here
    }));

    return (
        <TaskTable headers={tasktableHeaders} body={transformedTasks} />
    );
}
