import React from 'react'
import { StatCardProps } from '@/types/index'

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, statType }) => {
  // Determine background and border colors dynamically based on statType
  const bgColors = {
    alerts: 'bg-red-100 border-red-500',
    completed: 'bg-purple-100 border-purple-500',
    production: 'bg-purple-100 border-purple-500',
    efficiency: 'bg-purple-100 border-purple-500',
  };

  const borderClass = statType === 'alerts' ? 'border-red-500' : 'border-purple-500';

  return (
    <div className={`rounded-lg shadow p-4 border-l-4 ${borderClass} ${bgColors[statType]}`}> {/* Dynamic background and border */} 
      <div className="flex items-center">
        <div className={`rounded-full p-3 ${statType === 'alerts' ? 'bg-red-100' : 'bg-purple-100'}`}> {/* Adjust icon background */}
          <Icon size={24} className={statType === 'alerts' ? 'text-red-600' : 'text-purple_logo'} /> {/* Color icon based on statType */}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-1 text-gray-800"> {/* Slightly larger title */}
            {title}
          </h3>
          <p className={`text-2xl font-bold ${statType === 'alerts' ? 'text-red-600' : 'text-purple_logo'}`}>
            {value}
          </p> {/* Dynamic color for value */}
        </div>
      </div>
    </div>
  );
}
