"use client";
import React, { useState ,useEffect } from 'react';
import { DeffectData } from '@/types/index';
import StatisticsSidebar from "@/components/defect-logging/aside-defect-table";
import { defectData } from '@/data/defectData';
import ProgressBar  from '@/components/ProgressBar';
import api from "@/lib/axios"
import { log } from 'console';

interface DeffectTableProps {
  data: DeffectData[];
}

export const StatsTableDefect: React.FC<DeffectTableProps> = ({ data }) => {
//   const [filteredData, setFilteredData] = useState<DeffectData[]>(data);
const [filteredData, setFilteredData] = useState<DeffectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch defects data from the API
    const fetchDefects = async () => {
      try {
        setLoading(true);
        const response = await api.get('/api/defects'); // Update with your actual endpoint
        console.log("111111111111111");
        console.log(response.data);

        console.log("111111111111111");
        // console.log(response.data);
        setFilteredData(response.data); // Assuming the response has the correct data shape
        setLoading(false);
      } catch (err) {
        setError('Failed to load defects data');
        setLoading(false);
      }
    };

    fetchDefects();
  }, []);

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
        
        <div className="mb-4 md:mb-0 md:w-1/3  xl:mr-2 lg:mr-2 flex flex-col  gap-2" >
        <div className='flex flex-col space-y-4 mb-4'>
        <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Add Machine
                </button>
                <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Edit Machine
                </button>
                <button className='text-white bg-purple_button py-2 px-6 rounded-lg shadow-lg'>
                    Delete Machine
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
            </tr>
          </thead>
          {/* <tbody className="bg-white divide-y divide-gray-200">
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
              </tr>
            ))}
          </tbody> */}

<tbody className="bg-white divide-y divide-gray-200">
              {filteredData?.map((deffect) => (
                <tr key={deffect.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {deffect.machine_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {deffect.machine_type}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSpecifityColor(
                      deffect.defect_type
                    )}`}
                  >
                    {deffect.defect_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(deffect.defect_time).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};