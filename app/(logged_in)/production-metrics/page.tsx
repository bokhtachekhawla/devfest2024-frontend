// "use client";


// import MachineTable from "@/components/production/production";
// import api from "@/lib/axios";
// // import { ProductionData } from "@/data/production-matrData";
// import { DashboardProps } from '@/types/index'


// import React, { useEffect, useState } from "react";

// type ProductionType = {
//       id: number;
//       machine_id: number;
//       machine_name: string;
//       machine_type: string;
//       start_time: string;
//       end_time: string;
//       output_quantity: number;
//       target_quantity: number;
//     };

// export default function ProductionPage({  }: DashboardProps) {
//       const [data, setData] = useState<ProductionType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
// //   const API_URL = "https://5217-105-235-128-29.ngrok-free.app/api/productions"; 

//   useEffect(() => {
//     // Fetching data from the API
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/api/productions");
//         if (!response) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.data;
//         setData(result);  // Assuming the API returns an array of ProductionType objects
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Display loading or error state
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//     return (

//           <MachineTable data={data}/>
//     )
//   }



"use client";
import React, { useEffect, useState } from "react";

import {MachineTable} from "@/components/production/production";
import api from "@/lib/axios";
// import { ProductionData } from "@/data/production-matrData";
import { DashboardProps } from '@/types/index'

type ProductionType = {
  id: number;
  machine_id: number;
  machine_name: string;
  machine_type: string;
  start_time: string;
  end_time: string;
  output_quantity: string;
  target_quantity: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface MachineTableProps {
  data: ProductionType[]; // This should match the imported type
}

export default function ProductionPage({ }: DashboardProps) {
  const [data, setData] = useState<ProductionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "/api/productions";  // Full URL

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

  return  (  <MachineTable data={data}/>)

}
