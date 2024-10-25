'use client'

import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import axios from '@/lib/axios';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/navigation';

interface SearchOption {
  value: string;
  label: string;
}

interface SearchBarProps {
  placeholder: string;
  style?: React.CSSProperties;
  width?: number | string;
}

const fetchSearchResults = async (search: string): Promise<SearchOption[]> => {
  try {
    const response = await axios.get(`/api/machines?machine_name=${search}`);
    return response.data.data.map((machine: any) => ({
      value: machine.id.toString(),
      label: machine.machine_name
    }));
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
};

const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, style, width = 200 }) => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string | undefined>();
  const router = useRouter();

  const handleSearch = async (newValue: string) => {
    if (newValue) {
      const results = await debouncedFetchSearchResults(newValue);
      setOptions(results);
    } else {
      setOptions([]);
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    router.push(`/machine-monitoring/${newValue}`);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={placeholder}
      style={{ ...style, width }}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={options}
    />
  );
};

export default SearchBar;