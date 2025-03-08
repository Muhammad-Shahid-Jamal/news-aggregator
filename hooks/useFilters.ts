import { useState } from 'react';

export type FilterState = {
  category: string;
  source: string;
  date: string;
};

type FilterHook = {
  filters: FilterState;
  handleFilterChange: (name: keyof FilterState, value: string) => void;
};

const useFilters = (): FilterHook => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'Technology',
    source: 'All',
    date: new Date().toISOString().split('T')[0],
  });

  // Handle changes for all filters dynamically
  const handleFilterChange = (name: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { filters, handleFilterChange };
};

export default useFilters;
