"use client"
// pages/defects/index.tsx
import React, { useEffect, useState } from 'react'
import {StatsTableDefect} from '@/components/defect-logging/defect-table'
// import { defectData } from '@/data/defectData'
import { DashboardProps } from '@/types/index'
import api from '@/lib/axios';


type DefectType = {
  id: string;
  machine_name: string;
  machine_type:string;
  defect_type: string;
  defect_time: string;
};

export default function DefectsPage({   }: DashboardProps) {
  const [data, setData] = useState<DefectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "/api/defects";  // Full URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(API_URL);  // Use full URL
        if (!response) {
          throw new Error("Failed to fetch data");
        }

        setData(response.data.data);  // Assuming the API returns an array of ProductionType objects
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  // Display loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
        <StatsTableDefect data={data} />
  )
}
