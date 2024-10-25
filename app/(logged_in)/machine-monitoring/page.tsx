"use client"

import { StatsTable } from "@/components/machine-monitoring/MachinsTable";
import { useState, useEffect } from 'react';
import api from "@/lib/axios";
import { MachineData } from '@/types/index';

export default function MachineMonitoringPage() {
    const [machines, setMachines] = useState<MachineData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMachines = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/api/machines');
                setMachines(response.data.data); // Access the 'data' property of the response
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching machines:', err);
                setError('Failed to fetch machines. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchMachines();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <StatsTable data={machines} />
    );
}