"use client";
import React, { useEffect, useState } from 'react';
// import {  AlertsType } from '@/data/defectData';
import StatisticsSidebar from "@/components/alerts/aside-alerts";

import ProgressBar  from '@/components/progres/ProgressBar';

import { AlertsType } from '@/data/alerts-data';

interface alertsTableProps {
  data: AlertsType[];
}




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
export const StatsTableAlert: React.FC<alertsTableProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredData, setFilteredData] = useState<AlertsType[]>(data);
  
  useEffect(() => setFilteredData(data), [data]);



  return (
    // <div className='flex flex-col md:flex-row p-4'>
    <div className="flex flex-col md:flex-row p-4 gap-4">

        {/* <div className="mb-4 md:mb-0 md:w-1/3  xl:mr-2  w-[20%] lg:mr-2 flex flex-col  gap-2" >
         */}
         <div className="md:w-1/3 xl:w-1/4 w-full flex flex-col gap-4">
        
        <StatisticsSidebar data={data}  />
        <ProgressBar current={10} total={50} label="Defective Machines" />
        </div>

      {/* <div className="flex-grow overflow-auto custom-scrollbar xl:ml-2 lg:ml-2 xl:mt-0 lg:mt-0  mt-8  ">
       */}
       <div className="flex-grow overflow-auto custom-scrollbar">
        <table className="w-full bg-white rounded-lg  overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Anomalie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alert Time</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((alerts) => (
              <tr key={alerts.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{alerts.anomalie}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{alerts.machine_name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{alerts.machine_type}</td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(alerts.alert_time).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};