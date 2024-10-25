/* eslint-disable @typescript-eslint/no-unused-vars */
// // // // "use client"
// // // import React from 'react';
// // // import { ProductionType } from '@/data/production-matrData';
// // // import { FaEdit, FaTrash } from 'react-icons/fa';
// // // import { IoAddCircle } from "react-icons/io5";

// // // interface MachineTableProps {
// // //     data: ProductionType[];
// // // }

// // // // Function to get color based on the progress percentage
// // // const getProgressColor = (current: number, total: number) => {
// // //   const percentage = (current / total) * 100;
// // //   if (percentage <= 50) return 'text-red-500';   // Red for low progress
// // //   if (percentage <= 80) return 'text-yellow-500'; // Yellow for mid-range progress
// // //   return 'text-green-500';                        // Green for good progress
// // // };

// // // export const MachineTable: React.FC<MachineTableProps> = ({ data }) => {
// // //   return (
// // //     <div className="overflow-x-auto">
// // //       <div className='flex flex-col md:flex-row   md:w-full w-64 xs:w-full   justify-end mb-4'>
// // //         <button
// // //                     type="button"
// // //                     className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out  "
// // //                     aria-label="Add"
// // //                     onClick={() =>{} }
// // //                   >
// // //                     <IoAddCircle className="mr-1 w-8 h-8" /> 
// // //                   </button>
        
// // //       </div>
// // //       <table className="min-w-full bg-white shadow-md rounded-lg">
// // //         <thead className="bg-gray-50">
// // //           <tr>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Machine</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">output_quantity</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
// // //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody className="bg-white divide-y divide-gray-200">
// // //           {data.map((pro: ProductionType, index: number) => (
// // //             <tr key={index}>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pro.machine_name}</td>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.machine_type}</td>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.start_time.toLocaleDateString()}</td>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.end_time.toLocaleDateString()}</td>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.output_quantity}</td>
// // //               <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                 <span className={getProgressColor(pro.output_quantity, pro.target)}>
// // //                   {` ${pro.output_quantity}/${pro.target}`}
// // //                 </span>
// // //               </td>

// // //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
// // //                   <button
// // //                     type="button"
// // //                     className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
// // //                     aria-label="Edit"
// // //                     onClick={() =>{} }
// // //                   >
// // //                     <FaEdit className="mr-1" /> 
// // //                   </button>
// // //                   <button
// // //                     type="button"
// // //                     className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
// // //                     aria-label="Delete"
// // //                     onClick={() => {}}
// // //                   >
// // //                     <FaTrash className="mr-1" /> 
// // //                   </button>
// // //                 </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default MachineTable;


// // "use client";
// // import api from "@/lib/axios";
// // import React , {useState , useEffect} from "react";
// // import { FaEdit, FaTrash } from "react-icons/fa";
// // import { IoAddCircle } from "react-icons/io5";
// // import {ProductionType} from "@/data/production-matrData"

// // type ProductionType = {
// //   id: number;
// //   machine_id: number;
// //   machine_name: string;
// //   machine_type: string;
// //   start_time: string;
// //   end_time: string;
// //   output_quantity_quantity: number;
// //   target_quantity: number;
// // };


// // interface MachineTableProps {
// //   data: ProductionType[];
// //   onAdd: (newData: ProductionType) => void;
// //   onEdit: (id: number, updatedData: ProductionType) => void;
// //   onDelete: (id: number) => void;
// // }

// // // Function to get color based on the progress percentage
// // const getProgressColor = (current: number, total: number) => {
// //   const percentage = (current / total) * 100;
// //   if (percentage <= 50) return "text-red-500"; // Red for low progress
// //   if (percentage <= 80) return "text-yellow-500"; // Yellow for mid-range progress
// //   return "text-green-500"; // Green for good progress
// // };

// // export const MachineTable: React.FC<MachineTableProps> = ({ data :data }) => {

// //   const [filteredData, setFilteredData] = useState<ProductionType[]>(data)
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedPro, setSelectedPro] = useState<ProductionType | null>(null);
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// //   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Modal
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Modal


// //   useEffect(() => {
// //     setFilteredData(data);
// //   }, [data]);

// //   const toggleModal = async (production: ProductionType | null = null) => {
// //     setIsModalOpen(!isModalOpen);
// //     setSelectedPro(production);
// //   };
// //   const handleDelete = (production: ProductionType) => {
// //     setSelectedPro(production);
// //     setIsDeleteModalOpen(true); // Open delete modal
// //   };

// //   const handleDeleteConfirm = async () => {
// //     if (!selectedPro) return;

// //     try {
// //       const response = await api.delete(`/api/productions/${selectedPro.id}`);
// //       if (response.status === 200) {
// //         const updatedData = filteredData.filter(production => production.id !== selectedPro.id);
// //         setFilteredData(updatedData);
// //         setIsDeleteModalOpen(false);
// //         setSelectedPro(null);
// //       }
// //     } catch (error) {
// //       console.error('Error deleting machine:', error);
// //     }
// //   };

// //   const handleFilterChange = (filters: { type: string; status: string }) => {
// //     const newFilteredData = data.filter((production) => {
// //       const typeMatch = !filters.type || production.machine_type === filters.type
// //       const statusMatch = !filters.status || production.output_quantity_quantity === filters.output_quantity_quantity
// //       return typeMatch && statusMatch
// //     })
// //     setFilteredData(newFilteredData)
// //   }

// //   const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (!selectedPro) return;

// //     const formData = new FormData(e.currentTarget);
// //     const formatDate = (date: string) => {
// //       const d = new Date(date);
// //       const pad = (n: number) => (n < 10 ? '0' + n : n);
// //       const hours = d.getHours();
// //       const minutes = d.getMinutes();
// //       const seconds = d.getSeconds();
// //       const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// //       return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
// //     };
// //     const updatedMachine = {
// //       machine_name: formData.get('machine_name') as string,
// //       last_maintenance: formatDate(formData.get('last_maintenance') as string),
// //     };
// //       const response = await api.put(`/api/machines/${selectedPro.id}`, updatedMachine);
// //       if (response.status === 200) {
// //         const updatedData = filteredData.map(machine =>
// //           machine.id === selectedPro.id ? { ...machine, ...updatedMachine } : machine
// //         );
// //         setFilteredData(updatedData);
// //         setIsEditModalOpen(false);
// //         setSelectedPro(null);
// //       }
// //     } catch (error) {
// //       console.error('Error updating machine:', error);
// //     }
// //   };
// //   const handleAdd = () => {
// //     setIsAddModalOpen(true);
// //   };
// //   const handleSaveAddMachine = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     const formData = new FormData(e.currentTarget);
// //     const formatDate = (date: string) => {
// //       const d = new Date(date);
// //       const pad = (n: number) => (n < 10 ? '0' + n : n);
// //       const hours = d.getHours();
// //       const minutes = d.getMinutes();
// //       const seconds = d.getSeconds();
// //       const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// //       return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
// //     };
// //     const newPro = {
// //       machine_name: formData.get('machine_name') as string,
// //       machine_type: formData.get('machine_type') as string,
// //       status: formData.get('status') as string,
// //       last_maintenance: formatDate(formData.get('last_maintenance') as string),
// //       first_usage: formatDate(formData.get('first_usage') as string),
// //     };  

// //     try {
// //       const response = await api.post('/api/machines', newPro);
// //       if (response.status === 201) {
// //         const updatedData = [...filteredData, response.data];
// //         setFilteredData(updatedData);
// //         setIsAddModalOpen(false);
// //       }
// //     } catch (error) {
// //       console.error('Error adding machine:', error);
// //     }};
// //   return (
// //     <div className="overflow-x-auto">
// //       <div className="flex flex-col md:flex-row md:w-full w-64 xs:w-full justify-end mb-4">
// //         <button
// //           type="button"
// //           className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
// //           aria-label="Add"
// //           onClick={() => {handleAdd()}}
// //         >
// //           <IoAddCircle className="mr-1 w-8 h-8" />
// //         </button>
// //       </div>
// //       <table className="min-w-full bg-white shadow-md rounded-lg">
// //         <thead className="bg-gray-50">
// //           <tr>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Machine</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">output_quantity</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
// //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200">
// //           {filteredData.map((pro) => (
// //             <tr key={pro.id}>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pro.machine_name}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.machine_type}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(pro.start_time).toLocaleDateString()}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(pro.end_time).toLocaleDateString()}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.output_quantity_quantity}</td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                 <span className={getProgressColor(pro.output_quantity_quantity, pro.target_quantity)}>
// //                   {` ${pro.output_quantity_quantity}/${pro.target_quantity}`}
// //                 </span>
// //               </td>
// //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
// //                 <button
// //                   type="button"
// //                   className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
// //                   aria-label="Edit"
// //                   onClick={() => handleEdit(pro)}  // Pass the current item for editing
// //                 >
// //                   <FaEdit className="mr-1" />
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
// //                   aria-label="Delete"
// //                   onClick={() => handleDelete(pro)}
// //                 >
// //                   <FaTrash className="mr-1" />
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };


// "use client";
// import api from "@/lib/axios";
// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { IoAddCircle } from "react-icons/io5";
// import { ProductionType } from "@/data/production-matrData";

// type ProductionType = {
//   id: number;
//   machine_id: number;
//   machine_name: string;
//   machine_type: string;
//   start_time: string;
//   end_time: string;
//   output_quantity_quantity: number;
//   target_quantity: number;
// };

// interface MachineTableProps {
//   data: ProductionType[];
//   onAdd: (newData: ProductionType) => void;
//   onEdit: (id: number, updatedData: ProductionType) => void;
//   onDelete: (id: number) => void;
// }

// // Function to get color based on the progress percentage
// const getProgressColor = (current: number, total: number) => {
//   const percentage = (current / total) * 100;
//   if (percentage <= 50) return "text-red-500"; // Red for low progress
//   if (percentage <= 80) return "text-yellow-500"; // Yellow for mid-range progress
//   return "text-green-500"; // Green for good progress
// };

// // Date formatting helper function
// const formatDate = (date: string) => {
//   const d = new Date(date);
//   const pad = (n: number) => (n < 10 ? "0" + n : n);
//   const hours = d.getHours();
//   const minutes = d.getMinutes();
//   const seconds = d.getSeconds();
//   const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//   return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
// };

// export const MachineTable: React.FC<MachineTableProps> = ({ data: data }) => {
//   const [filteredData, setFilteredData] = useState<ProductionType[]>(data);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPro, setSelectedPro] = useState<ProductionType | null>(null);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Modal
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Modal

//   useEffect(() => {
//     setFilteredData(data);
//   }, [data]);

//   const handleEdit = (production: ProductionType) => {
//     setSelectedPro(production);
//     setIsEditModalOpen(true);
//   };

//   const handleDelete = (production: ProductionType) => {
//     setSelectedPro(production);
//     setIsDeleteModalOpen(true); // Open delete modal
//   };

//   const handleDeleteConfirm = async () => {
//     if (!selectedPro) return;

//     try {
//       const response = await api.delete(`/api/productions/${selectedPro.id}`);
//       if (response.status === 200) {
//         const updatedData = filteredData.filter((production) => production.id !== selectedPro.id);
//         setFilteredData(updatedData);
//         setIsDeleteModalOpen(false);
//         setSelectedPro(null);
//       }
//     } catch (error) {
//       console.error("Error deleting machine:", error);
//     }
//   };

//   const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!selectedPro) return;

//     const formData = new FormData(e.currentTarget);
//     const updatedMachine = {
//       machine_name: formData.get("machine_name") as string,
//       last_maintenance: formatDate(formData.get("last_maintenance") as string),
//     };

//     try {
//       const response = await api.put(`/api/machines/${selectedPro.id}`, updatedMachine);
//       if (response.status === 200) {
//         const updatedData = filteredData.map((machine) =>
//           machine.id === selectedPro.id ? { ...machine, ...updatedMachine } : machine
//         );
//         setFilteredData(updatedData);
//         setIsEditModalOpen(false);
//         setSelectedPro(null);
//       }
//     } catch (error) {
//       console.error("Error updating machine:", error);
//     }
//   };

//   const handleAdd = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleSaveAddMachine = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);
//     const newPro = {
//       machine_name: formData.get("machine_name") as string,
//       machine_type: formData.get("machine_type") as string,
//       status: formData.get("status") as string,
//       last_maintenance: formatDate(formData.get("last_maintenance") as string),
//       first_usage: formatDate(formData.get("first_usage") as string),
//     };

//     try {
//       const response = await api.post("/api/machines", newPro);
//       if (response.status === 201) {
//         const updatedData = [...filteredData, response.data];
//         setFilteredData(updatedData);
//         setIsAddModalOpen(false);
//       }
//     } catch (error) {
//       console.error("Error adding machine:", error);
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <div className="flex flex-col md:flex-row md:w-full w-64 xs:w-full justify-end mb-4">
//         <button
//           type="button"
//           className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
//           aria-label="Add"
//           onClick={handleAdd}
//         >
//           <IoAddCircle className="mr-1 w-8 h-8" />
//         </button>
//       </div>
//       <table className="min-w-full bg-white shadow-md rounded-lg">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Machine</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">output_quantity</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {filteredData.map((pro) => (
//             <tr key={pro.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pro.machine_name}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.machine_type}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                 {new Date(pro.start_time).toLocaleDateString()}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                 {new Date(pro.end_time).toLocaleDateString()}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.output_quantity_quantity}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm">
//                 <span className={getProgressColor(pro.output_quantity_quantity, pro.target_quantity)}>
//                   {` ${pro.output_quantity_quantity}/${pro.target_quantity}`}
//                 </span>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
//                 <button
//                   type="button"
//                   className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
//                   aria-label="Edit"
//                   onClick={() => handleEdit(pro)}
//                 >
//                   <FaEdit className="mr-1" />
//                 </button>
//                 <button
//                   type="button"
//                   className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
//                   aria-label="Delete"
//                   onClick={() => handleDelete(pro)}
//                 >
//                   <FaTrash className="mr-1" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Modals for Edit, Add, and Delete Confirmation */}
//     </div>
//   );
// };

// export default MachineTable;






"use client";
import api from "@/lib/axios";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { ProductionType } from "@/data/production-matrData";

type Production_Type = {
  id: number;
  machine_id: number;
  machine_name: string;
  machine_type: string;
  start_time: Date; 
  end_time: Date;
  output_quantity: string;
  target_quantity: string;
};

interface MachineTableProps {
  data: ProductionType[];
  onAdd: (newData: ProductionType) => void;
  onEdit: (id: number, updatedData: ProductionType) => void;
  onDelete: (id: number) => void;
}

// Function to get color based on the progress percentage
const getProgressColor = (current: number, total: number) => {
  const percentage = (current / total) * 100;
  if (percentage <= 50) return "text-red-500"; // Red for low progress
  if (percentage <= 80) return "text-yellow-500"; // Yellow for mid-range progress
  return "text-green-500"; // Green for good progress
};

// Date formatting helper function
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

export const MachineTable: React.FC<MachineTableProps> = ({ data: data  , onAdd , onDelete , onEdit }) => {
  // const [filteredData, setFilteredData] = useState<ProductionType[]>(data);
  const [filteredData, setFilteredData] = useState<ProductionType[]>(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPro, setSelectedPro] = useState<ProductionType | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for Delete Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Modal

  useEffect(() => setFilteredData(data), [data]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleModal = async (machine: ProductionType | null = null) => {
    setIsModalOpen(!isModalOpen);
    setSelectedPro(machine);
   
  };

  

  
  const handleDelete = (machine: ProductionType) => {
    setSelectedPro(machine);
    setIsDeleteModalOpen(true); // Open delete modal
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteConfirm = async () => {
    if (!selectedPro) return;

    try {
      const response = await api.delete(`/api/productions/${selectedPro.id}`);
      if (response.status === 200) {
        const updatedData = filteredData.filter(machine => machine.id !== selectedPro.id);
        setFilteredData(updatedData);
        setIsDeleteModalOpen(false);
        setSelectedPro(null);
      }
    } catch (error) {
      console.error('Error deleting production:', error);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString('sv-SE').replace("T", " ");
  };
  
  
  


  const handleEdit = (production: ProductionType) => {
    setSelectedPro(production);
    setIsEditModalOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPro) return;

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



    
    // const updatedPro = {
    //   machine_name: formData.get('machine_name') as string,
    //   output_quantity_quantity:Number (formData.get('output_quantity_quantity')),
    //   target_quantity: Number(formData.get('target_quantity')),
    //   start_time: formatDate(formData.get('start_time') as string),
    //   end_time: formatDate(formData.get('end_time') as string),
    // };


    const updatedPro: ProductionType = {
      id: selectedPro.id, // Ensure you include the id
      machine_name: formData.get('machine_name') as string,
      output_quantity: formData.get('output_quantity_quantity') as string,
      target_quantity: formData.get('target_quantity') as string,
      start_time: formatDate(formData.get('start_time') as string), // Convert to Date
      end_time: formatDate(formData.get('end_time') as string), // Convert to Date
      machine_type: selectedPro.machine_type, // Ensure to maintain other required properties
      // output_quantity: selectedPro.output_quantity, // Or however you want to set this
      // target: selectedPro.target // Or however you want to set this
    };
    

    try {
      const response = await api.put(`/api/productions/${selectedPro.id}`, updatedPro);
      if (response.status === 200) {
        const updatedData: ProductionType[] = filteredData.map(production =>
          production.id === selectedPro.id ? { ...production, ...updatedPro } : production
        );
        
        setFilteredData(updatedData);
        setIsEditModalOpen(false);
        setSelectedPro(null);
      }
    } catch (error) {
      console.error('Error updating machine:', error);
    }
  };




  const handleAdd = () => {
    setIsAddModalOpen(true);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSaveAddPro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    const newPro = {
      machine_name: formData.get('machine_name') as string,
      machine_type: formData.get('machine_type') as string,
      start_time: formatDate(formData.get('start_time') as string),
      end_time: formatDate(formData.get('end_time') as string),
      output_quantity_quantity: Number(formData.get('output_quantity_quantity')),
      target_quantity: Number(formData.get('target_quantity')),
    };  

    try {
      const response = await api.post('/api/productions', newPro);
      if (response.status === 201) {
        const updatedData = [...filteredData, response.data];
        setFilteredData(updatedData);
        setIsAddModalOpen(false);
      }
    } catch (error) {
      console.error('Error adding production:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Machine</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">End Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">output_quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((pro) => (
            <tr key={pro.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pro.machine_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pro.machine_type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {new Date(pro.start_time).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {new Date(pro.end_time).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-bold text-gray-600 text-center">{pro.output_quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-bold">
                {/* <span className={getProgressColor(pro.output_quantity, pro.target)}>
                  {` ${pro.output_quantity}/${pro.target}`}
                </span> */}
                <span className={getProgressColor(Number(pro.output_quantity), Number(pro.target_quantity))}>
    {`${pro.output_quantity}/${pro.target_quantity}`}
</span>

              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                  aria-label="Edit"
                  onClick={() => handleEdit(pro)}
                >
                  <FaEdit className="mr-1" />
                </button>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                  aria-label="Delete"
                  onClick={() => handleDelete(pro)}
                >
                  <FaTrash className="mr-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modals for Edit, Add, and Delete Confirmation */}
      {isModalOpen && selectedPro && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-80 min-h-screen flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl m-4">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => toggleModal()} className="text-gray-500">Back</button>
              <h2 className="text-xl font-semibold text-purple_button">{selectedPro.machine_name}</h2>
              <button onClick={() => toggleModal()} className="text-gray-500">X</button>
            </div>
            
          </div>
        </div>
      )}
      {/* Delete Modal */}
      {isDeleteModalOpen && selectedPro && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete <strong>{selectedPro.machine_name}</strong>? This action cannot be undone.</p>
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
      {isEditModalOpen && selectedPro && (
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
                    defaultValue={selectedPro.machine_name}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter machine name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Last Maintenance</label>
                  <input
                    type="datetime-local"
                    name="start_time"
                    defaultValue={new Date(selectedPro.start_time).toISOString().slice(0, 16)}
                    // Usage
  // defaultValue={formatDate(new Date(selectedPro.start_time))}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    title="Start Time"
                    placeholder="Enter the strat  date and time"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">End Time</label>
                  <input
                    type="datetime-local"
                    name="end_time"
                    defaultValue={new Date(selectedPro.end_time).toISOString().slice(0, 16)}
                    // defaultValue={formatDate(new Date(selectedPro.end_time))}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    title="End Production"
                    placeholder="Enter the end date and time"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Output Quantity</label>
                  <input
                    type="text"
                    name="output_quantity"
                    defaultValue={ Number(selectedPro.output_quantity)}
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter The output Quantity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text_black mb-1">Target Quantity</label>
                  <input
                    type="text"
                    name="target_quantity"
                    defaultValue={
                      Number(selectedPro.target_quantity)
                    }
                    className="block w-full border border-text_inputs_grey rounded-md shadow-sm focus:ring-purple_button focus:border-purple_button text-sm p-2"
                    required
                    placeholder="Enter Target Quantity"
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
  );
};

export default MachineTable;
