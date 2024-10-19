
"use client"; 
import React, { useEffect, useState, useRef } from 'react';
import { DeffectData } from '@/types/index';
import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
import ProgressBar from '@/components/ProgressBar';
import api from "@/lib/axios";
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';

export const StatsTableDefect: React.FC = () => {
  const [filteredData, setFilteredData] = useState<DeffectData[]>([]);
//   const [filteredData, setFilteredData] = useState<DeffectData[]>([]); // Initialized as an empty array

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false); // State for sidebar visibility
  const [filters, setFilters] = useState<any[]>([]); // State for filters
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for scrolling

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

  useEffect(() => {
    const fetchDefects = async () => {
      setLoading(true); // Start loading before fetching
      try {
        const response = await axios.get("https://d0af-105-235-130-20.ngrok-free.app/api/defects");
        console.log("API Response:", response.data); // Log the entire response
        
        if (response.data) {
          setFilteredData(response.data); // Set filtered data
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        setError("Error fetching defects."); // Set error message
        console.error("Error fetching defects:", error);
      } finally {
        setLoading(false); // Set loading to false once the request is completed
      }
    };

    fetchDefects();
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarVisible((prev) => !prev); // Toggle sidebar visibility
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or component
  }

  if (error) {
    return <div>Error: {error}</div>; // Handle the error case appropriately
  }
  const fetchDefects = async () => {
    setLoading(true); 
    try {
        const response = await axios.get("https://d0af-105-235-130-20.ngrok-free.app/api/defects");
        console.log("API Response:", response.data); // Log the API response

        if (Array.isArray(response.data)) {
            setFilteredData(response.data); // Set filtered data if it's an array
        } else {
            throw new Error("Data is not an array");
        }
    } catch (error) {
        setError("Error fetching defects."); 
        console.error("Error fetching defects:", error);
    } finally {
        setLoading(false); 
    }
};

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Sidebar toggle button */}
      <button 
        onClick={handleSidebarToggle}
        className="mb-4 md:hidden text-white bg-purple_button py-2 px-4 rounded-lg">
        Toggle Sidebar
      </button>

      {/* Sidebar for statistics */}
      <AnimatePresence>
        {isSidebarVisible && (
          <motion.div
            key="sidebar"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-1/3 md:w-1/4 lg:w-1/5">
            <StatisticsSidebar data={[]} /> {/* Pass appropriate data here */}
            <ProgressBar current={10} total={50} label="Defective Machines" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0 mt-8">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-medium text-gray-500">Machine Name</th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-medium text-gray-500">Machine Type</th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-medium text-gray-500">Defect Type</th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-medium text-gray-500">Defect Time</th>
            </tr>
          </thead>
          {/* <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((defect) => (
              <tr key={defect.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{defect.machine_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{defect.machine_type}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(defect.defect_type)}`}>
                  {defect.defect_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(defect.defect_time).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody> */}

<tbody className="bg-white divide-y divide-gray-200">
    {filteredData.length > 0 ? (
        filteredData.map((defect) => (
            <tr key={defect.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{defect.machine_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{defect.machine_type}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(defect.defect_type)}`}>
                    {defect.defect_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(defect.defect_time).toLocaleString()}
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={4} className="px-6 py-4 text-sm text-gray-600 text-center">No defects found</td>
        </tr>
    )}
</tbody>

        </table>
      </div>
    </div>
  );
};
