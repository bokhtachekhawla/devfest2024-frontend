"use client"
import EnergyTable from "@/components/energy/EnergyTable";
import { useState, useEffect } from 'react';
import api from "@/lib/axios";

export default function EnergyPage() {
    const [energyData, setEnergyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEnergyData = async () => {
            try {
                const response = await api.get('/api/energy-usage');
                setEnergyData(response.data.data);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching energy data:', err);
                setError('Failed to fetch energy data. Please try again later.');
                setIsLoading(false);
            }
        };

        fetchEnergyData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <EnergyTable data={energyData} />;
}