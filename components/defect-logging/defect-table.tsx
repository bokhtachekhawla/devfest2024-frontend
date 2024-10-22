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
import React, { useState } from 'react';
import { DeffectData } from '@/data/defectData';
import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
import { defectData } from '@/data/defectData';
import ProgressBar  from '@/components/progres/ProgressBar';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface DeffectTableProps {
  data: DeffectData[];
}

export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<DeffectData[]>(data);

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
        <StatisticsSidebar data={defectData}  />
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
                    onClick={() =>{} }
                  >
                    <FaEdit className="mr-1" /> 
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Delete"
                    onClick={() => {}}
                  >
                    <FaTrash className="mr-1" /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};