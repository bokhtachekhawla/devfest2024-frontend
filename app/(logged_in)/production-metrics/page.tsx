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

import   {MachineTable} from "@/components/production/production";
import api from "@/lib/axios";
import { DashboardProps } from '@/types/index';
import React, { useEffect, useState } from "react";

type ProductionType = {
  id: number;
  machine_id: number;
  machine_name: string;
  machine_type: string;
  start_time: string;
  end_time: string;
  output_quantity: number;
  target_quantity: number;
};

export default function ProductionPage({ }: DashboardProps) {
  const [data, setData] = useState<ProductionType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<ProductionType | null>(null);
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


  const handleEdit = (id: number, updatedData: ProductionType) => {
      setEditingId(id);
      setEditFormData(updatedData);  // Pre-fill the form with existing data
    };
  
    const handleEditSubmit = async () => {
      if (!editFormData || !editingId) return;
  
      try {
        const response = await api.put(`${API_URL}/${editingId}`, editFormData);
        setData(data.map(d => d.id === editingId ? response.data.data : d));  // Update the state with new data
        setEditingId(null);  // Clear edit mode
      } catch (err) {
        setError("Failed to update data");
      }
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (editFormData) {
        setEditFormData({
          ...editFormData,
          [e.target.name]: e.target.value,
        });
      }
    };
  
    const handleDelete = async (id: number) => {
      try {
        await api.delete(`${API_URL}/${id}`);
        setData(data.filter(d => d.id !== id));  // Remove deleted item from the state
      } catch (err) {
        setError("Failed to delete data");
      }
    };
  

  // Display loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <>
  <MachineTable data={data}  onEdit={handleEdit}
  onDelete={handleDelete} />;
  {editingId && editFormData && (
        <div className="edit-form">
          <h3>Edit Production Data</h3>
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              name="machine_name"
              value={editFormData.machine_name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="output_quantity"
              value={editFormData.output_quantity}
              onChange={handleInputChange}
            />
            {/* Add more fields as needed */}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
  </>
  

}
