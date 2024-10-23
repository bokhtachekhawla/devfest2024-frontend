import React from 'react'
import { StatCardProps } from '@/types/index'

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-4"> {/* Light background */}
      <div className="flex items-center">
        <div className="rounded-full p-3 bg-purple-100"> {/* Light purple background for the icon */}
          <Icon size={24} className="text-purple_logo" /> {/* Strong purple color for the icon */}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-2 text-black"> {/* Strong black text */}
            {title}
          </h3>
          <p className="text-2xl font-bold text-purple_logo">{value}</p> {/* Strong text color */}
        </div>
      </div>
    </div>
  )
}
