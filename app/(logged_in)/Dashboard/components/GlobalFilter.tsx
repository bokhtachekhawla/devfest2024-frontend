// components/GlobalFilter.tsx
import React from 'react';

interface GlobalFilterProps {
  filter: string;
  setFilter: (filterValue: string) => void;
}

export const GlobalFilter: React.FC<GlobalFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-2">Global Search</label>
      <input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1"
        placeholder="Search all columns..."
      />
    </div>
  );
};
