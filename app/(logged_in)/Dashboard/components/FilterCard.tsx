import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FilterState, FilterCardProps } from '@/types/index'
import { machineTypes, statuses } from '@/constants/index'

export const FilterCard: React.FC<FilterCardProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    status: ''
  })
  const [openFilter, setOpenFilter] = useState<'type' | 'status' | null>(null)

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value === 'All Types' || value === 'All Statuses' ? '' : value }
    setFilters(newFilters)
    onFilterChange(newFilters)
    setOpenFilter(null)
  }

  const toggleFilter = (filter: 'type' | 'status') => {
    setOpenFilter(openFilter === filter ? null : filter)
  }

  const renderFilterOptions = (options: string[], filterKey: keyof FilterState) => (
    <div 
      className={`
        mt-2 space-y-2 overflow-y-auto transition-all duration-300 ease-in-out
        ${openFilter === filterKey ? 'max-h-60' : 'max-h-0'}
      `}
    >
      {options.map((option) => (
        <button
          key={option}
          className={`
            w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200
            ${filters[filterKey] === option 
              ? 'bg-purple-100 text-purple-700' 
              : 'hover:bg-gray-100'
            }
          `}
          onClick={() => handleFilterChange(filterKey, option)}
        >
          {option}
        </button>
      ))}
    </div>
  )

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        All Categories
      </h2>
      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleFilter('type')}
            className="flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <span>{filters.type || 'All Types'}</span>
            {openFilter === 'type' ? <ChevronUp className="h-4 w-4 custom-scrollbar" /> : <ChevronDown className="h-4 w-4 custom-scrollbar" />}
          </button>
          {renderFilterOptions(['All Types', ...machineTypes], 'type')}
        </div>
        <div>
          <button
            onClick={() => toggleFilter('status')}
            className="flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <span>{filters.status || 'All Statuses'}</span>
            {openFilter === 'status' ? <ChevronUp className="h-4 w-4 custom-scrollbar" /> : <ChevronDown className="h-4 w-4 custom-scrollbar" />}
          </button>
          {renderFilterOptions(['All Statuses', ...statuses], 'status')}
        </div>
      </div>
    </div>
  )
}