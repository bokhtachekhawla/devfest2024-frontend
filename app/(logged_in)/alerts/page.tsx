// "use client"
// import { Tables } from "@/components/common-components/Tables";
// import { alertsTableBody, AlertstableHeaders } from "@/constants";
// import { DashboardProps } from "@/types";


// export default function AlertsPage({  }: DashboardProps) {
//     return (
//         <Tables headers={AlertstableHeaders} body={alertsTableBody} />

//     )
//   }


"use client"
// pages/defects/index.tsx
import React, { useEffect, useState } from 'react'
import {StatsTableAlert} from '@/components/alerts/alerts'
// import { defectData } from '@/data/defectData'
import { DashboardProps } from '@/types/index'
import api from '@/lib/axios';



export interface AlertsType {
    id: string;
    machine_name: string;
    machine_type:string;
    data_points: null;
    anomalie: string;
    alert_time :string;
  }
  

export default function AlertsPage({   }: DashboardProps) {
  const [data, setData] = useState<AlertsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "/api/alerts";  // Full URL

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
        <StatsTableAlert data={data} />
  )
}
