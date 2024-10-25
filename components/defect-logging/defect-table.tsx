/* eslint-disable @typescript-eslint/no-unused-vars */
// // "use client";
// // import React, { useState ,useEffect } from 'react';
// // import { DeffectData } from '@/types/index';
// // import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
// // import { defectData } from '@/data/defectData';
// // import ProgressBar  from '@/components/ProgressBar';
// // import api from "@/lib/axios"
// // // import { log } from 'console';

// // interface DeffectTableProps {
// //   data: DeffectData[];
// // }

// // export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
// // //   const [filteredData, setFilteredData] = useState<DeffectData[]>(data);
// // const [filteredData, setFilteredData] = useState<DeffectData[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Fetch defects data from the API
// //     const fetchDefects = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await api.get('/api/defects'); // Update with your actual endpoint
// //         console.log("111111111111111");
// //         console.log(response.data);

// //         console.log("111111111111111");
// //         // console.log(response.data);
// //         setFilteredData(response.data); // Assuming the response has the correct data shape
// //         setLoading(false);
// //       } catch (err) {
// //         setError('Failed to load defects data');
// //         setLoading(false);
// //       }
// //     };

// //     fetchDefects();
// //   }, []);

// //   const getSpecifityColor = (secifity: string) => {
// //     switch (secifity) {
// //       case 'Crash':
// //         return 'text-red-600'; // Red for Crash
// //       case 'Bug':
// //         return 'text-yellow-500'; // Yellow for Bug
// //       case 'Burned':
// //         return 'text-orange-600'; // Orange for Burned
// //       default:
// //         return 'text-gray-600'; // Default color
// //     }
// //   };

 

// //   return (
// //     <div className='flex flex-col md:flex-row p-4'>
        
// //         <div className="mb-4 md:mb-0 md:w-1/3  xl:mr-2 lg:mr-2 flex flex-col  gap-2" >
// //         <div className='flex flex-col space-y-4 mb-4'>
// //         <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //                     Add Machine
// //                 </button>
// //                 <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //                     Edit Machine
// //                 </button>
// //                 <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //                     Delete Machine
// //                 </button>
// //         </div>
// //         <StatisticsSidebar data={defectData}  />
// //         <ProgressBar current={10} total={50} label="Defective Machines" />
// //         </div>

// //       <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0  mt-8  ">
// //         <table className="w-full bg-white rounded-lg  overflow-hidden">
// //           <thead className="bg-gray-50">
// //             <tr>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specify</th>
// //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defect Time</th>
// //             </tr>
// //           </thead>
// //           {/* <tbody className="bg-white divide-y divide-gray-200">
// //             {filteredData.map((deffect) => (
// //               <tr key={deffect.id}>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{deffect.machine_name}</td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{deffect.machine_type}</td>
// //                 <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(deffect.defect_type)}`}>
// //                   {deffect.defect_type}
// //                 </td>
// //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                   {new Date(deffect.defect_time).toLocaleDateString()}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody> */}

// // <tbody className="bg-white divide-y divide-gray-200">
// //               {filteredData?.map((deffect) => (
// //                 <tr key={deffect.id}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {deffect.machine_name}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {deffect.machine_type}
// //                   </td>
// //                   <td
// //                     className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(
// //                       deffect.defect_type
// //                     )}`}
// //                   >
// //                     {deffect.defect_type}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {new Date(deffect.defect_time).toLocaleDateString()}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };



// // "use client";
// // import React, { useState, useEffect } from 'react';
// // import { DeffectData } from '@/types/index';
// // import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
// // import ProgressBar from '@/components/ProgressBar';
// // import api from "@/lib/axios";

// // interface DeffectTableProps {
// //   data: DeffectData[];
// // }

// // export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
// //   const [filteredData, setFilteredData] = useState<DeffectData[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Fetch defects data from the API
// //     const fetchDefects = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await api.get('/api/defects'); // Replace with your actual endpoint
// //         // Map the API response to the DeffectData structure
// //         const formattedDefects: DeffectData[] = response.data.map((defect: any) => ({
// //           id: defect._id, // Assuming API uses _id
// //           machine_name: defect.machine_name || "", // Assuming API uses machine_name
// //           defect_type: defect.defect_type || "", // Assuming API uses defect_type
// //           defect_time: new Date(defect.defect_time), // Assuming API provides defect_time as a valid date string
// //           type: defect.machine_type || "", // Assuming API uses machine_type
// //         }));

// //         setFilteredData(formattedDefects); // Set the formatted defects data
// //         setLoading(false);
// //       } catch (err) {
// //         setError('Failed to load defects data');
// //         setLoading(false);
// //       }
// //     };

// //     fetchDefects();
// //   }, []);

// //   const getSpecifityColor = (defectType: string) => {
// //     switch (defectType) {
// //       case 'Crash':
// //         return 'text-red-600'; // Red for Crash
// //       case 'Bug':
// //         return 'text-yellow-500'; // Yellow for Bug
// //       case 'Burned':
// //         return 'text-orange-600'; // Orange for Burned
// //       default:
// //         return 'text-gray-600'; // Default color
// //     }
// //   };

// //   return (
// //     <div className='flex flex-col md:flex-row p-4'>
// //       <div className="mb-4 md:mb-0 md:w-1/3 xl:mr-2 lg:mr-2 flex flex-col gap-2">
// //         <div className='flex flex-col space-y-4 mb-4'>
// //           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //             Add Machine
// //           </button>
// //           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //             Edit Machine
// //           </button>
// //           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
// //             Delete Machine
// //           </button>
// //         </div>
// //         <StatisticsSidebar data={data} />
// //         <ProgressBar current={10} total={50} label="Defective Machines" />
// //       </div>

// //       <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0 mt-8">
// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : error ? (
// //           <p>{error}</p>
// //         ) : (
// //           <table className="w-full bg-white rounded-lg overflow-hidden">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specify</th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defect Time</th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white divide-y divide-gray-200">
// //               {filteredData.map((deffect) => (
// //                 <tr key={deffect.id}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {deffect.machine_name}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {deffect.machine_type}
// //                   </td>
// //                   <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(deffect.defect_type)}`}>
// //                     {deffect.defect_type}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                     {new Date(deffect.defect_time).toLocaleDateString()}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };


// "use client";
// import React, { useState } from 'react';
// import { defectData, DeffectData } from '@/data/defectData'; // Make sure your interface is imported correctly
// import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
// import ProgressBar from '@/components/ProgressBar';
// // import api from "@/lib/axios";

// interface DeffectTableProps {
//   data: DeffectData[];
// }

// export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
//   const [filteredData, setFilteredData] = useState<DeffectData[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Fetch defects data from the API
// //     const fetchDefects = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await api.get('/api/defects'); // Make sure this endpoint is correct
        
// //         // Map the API response to match the DeffectData structure
// //         const formattedDefects: DeffectData[] = response.data.data.map((defect: any) => ({
// //           id: defect.id, // Convert ID to string
// //           machine_name: defect.machine_name || "", // Map machine name
// //           defect_type: defect.defect_type || "", // Map defect type
// //           defect_time: new Date(defect.defect_time), // Convert defect time to Date object
// //           machine_type: defect.machine_type || "", // Map machine type
// //         }));
// // console.log(response.data);

// //         setFilteredData(formattedDefects); // Set the formatted defects data
// //         setLoading(false);
// //       } catch (err) {
// //         console.error(err);
// //         setError('Failed to load defects data');
// //         setLoading(false);
// //       }
// //     };

// //     fetchDefects();
// //   }, []);

//   const getSpecifityColor = (defectType: string) => {
//     switch (defectType) {
//       case 'Crash':
//         return 'text-red-600'; // Red for Crash
//       case 'Bug':
//         return 'text-yellow-500'; // Yellow for Bug
//       case 'Burned':
//         return 'text-orange-600'; // Orange for Burned
//       default:
//         return 'text-gray-600'; // Default color
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row p-4'>
//       <div className="mb-4 md:mb-0 md:w-1/3 xl:mr-2 lg:mr-2 flex flex-col gap-2">
//         <div className='flex flex-col space-y-4 mb-4'>
//           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
//             Add Machine
//           </button>
//           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
//             Edit Machine
//           </button>
//           <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
//             Delete Machine
//           </button>
//         </div>
//         <StatisticsSidebar data={defectData} />
//         <ProgressBar current={10} total={50} label="Defective Machines" />
//       </div>

//       <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0 mt-8">
//         {/* {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : ( */}
//           <table className="w-full bg-white rounded-lg overflow-hidden">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specify</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defect Time</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredData.map((deffect) => (
//                 <tr key={deffect.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                     {deffect.machine_name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                     {deffect.machine_type}
//                   </td>
//                   <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(deffect.defect_type)}`}>
//                     {deffect.defect_type}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                     {new Date(deffect.defect_time).toLocaleDateString()} {new Date(deffect.defect_time).toLocaleTimeString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };


"use client";
import React, { useEffect, useState } from 'react';
import {  DeffectType } from '@/data/defectData';
import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
// import { defectData } from '@/data/defectData';
import ProgressBar  from '@/components/progres/ProgressBar';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '@/lib/axios';

interface DeffectTableProps {
  data: DeffectType[];
  onAdd: (newData: DeffectType) => void;
  onEdit: (id: number, updatedData: DeffectType) => void;
  onDelete: (id: number) => void;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Defect_Type = {
  id: string;
  machine_name: string;
  machine_type:string;
  defect_type: string;
  defect_time: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formatDate = (date: string) => {
  const d = new Date(date);
  const pad = (n: number) => (n < 10 ? "0" + n : n);
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
};
export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<DeffectType[]>(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDefect, setSelectedDefect] = useState<DeffectType | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Modal
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Modal
  
  useEffect(() => setFilteredData(data), [data]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleModal = async (defect: DeffectType | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedDefect(defect);
   
  };

  const handleDelete = (defect: DeffectType) => {
    setSelectedDefect(defect);
    setIsDeleteModalOpen(true); // Open delete modal
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteConfirm = async () => {
    if (!selectedDefect) return;

    try {
      const response = await api.delete(`/api/defects/${selectedDefect.id}`);
      if (response.status === 200) {
        const updatedData = filteredData.filter(machine => machine.id !== selectedDefect.id);
        setFilteredData(updatedData);
        setIsDeleteModalOpen(false);
        setSelectedDefect(null);
      }
    } catch (error) {
      console.error('Error deleting production:', error);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString('sv-SE').replace("T", " ");
  };

  const handleEdit = (defect: DeffectType) => {
    setSelectedDefect(defect);
    setIsEditModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDefect) return;

    const formData = new FormData(e.currentTarget);
    const formatDate = (date: string) => {
      const d = new Date(date);
      const pad = (n: number) => (n < 10 ? '0' + n : n);
      const hours = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
    };

    const updatedDefect: DeffectType = {
      id: selectedDefect.id, // Ensure you include the id
      machine_name: formData.get('machine_name') as string,
      defect_type: formData.get('defect_type') as string,
      defect_time: formatDate(formData.get('defect_time') as string), // Convert to Date
      machine_type: selectedDefect.machine_type, // Ensure to maintain other required properties
    };
    try {
      const response = await api.put(`/api/defects/${selectedDefect.id}`, updatedDefect);
      if (response.status === 200) {
        const updatedData: DeffectType[] = filteredData.map(production =>
          production.id === selectedDefect.id ? { ...production, ...updatedDefect } : production
        );
        
        setFilteredData(updatedData);
        setIsEditModalOpen(false);
        setSelectedDefect(null);
      }
    } catch (error) {
      console.error('Error updating machine:', error);
    }
  };



  const getSpecifityColor = (secifity: string) => {
    switch (secifity) {
      case 'Crash':
        return 'text-red-600'; // Red for Crash
      case 'Bug':
        return 'text-yellow-500'; // Yellow for Bug
      case 'Burned':
        return 'text-orange-600'; // Orange for Burned
      default:
        return 'text-gray-600'; // Default color
    }
  };

 

  return (
    <div className='flex flex-col md:flex-row p-4'>
        <div className="mb-4 md:mb-0 md:w-1/3  xl:mr-2  w-[20%] lg:mr-2 flex flex-col  gap-2" >
        <div className='flex flex-col space-y-4 mb-4'>
          <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
             Add Machine
          </button>
         </div>
        <StatisticsSidebar data={data}  />
        <ProgressBar current={10} total={50} label="Defective Machines" />
        </div>

      <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0  mt-8  ">
        <table className="w-full bg-white rounded-lg  overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specify</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defect Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((deffect) => (
              <tr key={deffect.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{deffect.machine_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{deffect.machine_type}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(deffect.defect_type)}`}>
                  {deffect.defect_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(deffect.defect_time).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Edit"
                    onClick={() =>handleEdit(deffect) }
                  >
                    <FaEdit className="mr-1" /> 
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Delete"
                    onClick={() => handleDelete(deffect)}
                  >
                    <FaTrash className="mr-1" /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modals for Edit, Add, and Delete Confirmation */}
      {isModalOpen && selectedDefect && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => toggleModal()} className="text-gray-500">Back</button>
              <h2 className="text-xl font-semibold text-purple_button">{selectedDefect.machine_name}</h2>
              <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
            
          </div>
        </div>
      )}
      {/* Delete Modal */}
      {isDeleteModalOpen && selectedDefect && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete <strong>{selectedDefect.machine_name}</strong>? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {isEditModalOpen && selectedDefect && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-slate-700 opacity-80">
          <div className="modal-box p-6 bg-white shadow-lg rounded-lg w-full max-w-lg">
            <h3 className="font-bold text-2xl text-purple_logo mb-6">Edit Machine Production</h3>
            <form onSubmit={handleSave}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Machine Name</label>
                  <input
                    type="text"
                    name="machine_name"
                    defaultValue={selectedDefect.machine_name}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter machine name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Defect Time</label>
                  <input
                    type="datetime-local"
                    name="defect_time"
                    defaultValue={new Date(selectedDefect.defect_time).toISOString().slice(0, 16)}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    title="Defect time"
                    placeholder="Enter the defect time"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Machine Type</label>
                  <input
                    type="text"
                    name="machine_type"
                    defaultValue={
                      Number(selectedDefect.machine_type)
                    }
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter machine type"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Defect Type</label>
                  <input
                    type="text"
                    name="defect_type"
                    defaultValue={ selectedDefect.defect_type}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter The defect type"
                  />
                </div>
               
                
              </div>
              <div className="modal-action flex justify-end space-x-4 mt-6">
                <button type="submit" className="bg-blue_logo text-white py-2 px-4 rounded-md hover:bg-purple_button transition">
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};