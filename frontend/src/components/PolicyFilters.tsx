import { IPolicyFilters } from '@/types/policyTypes';
import React from 'react';

interface PolicyFiltersProps {
  filters: IPolicyFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<IPolicyFilters>>;
}

function PolicyFilters({ filters, onFilterChange }: PolicyFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange(prev => ({
      ...prev,
      [name]: value === '' ? undefined :
        name.includes('premium') || name === 'minCoverage' ? Number(value) : value
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <select
        name="policyType"
        value={filters.policyType || ''}
        onChange={handleChange}
        className="p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">All Policy Types</option>
        <option value="Term Life">Term Life</option>
        <option value="Health">Health</option>
        <option value="Vehicle">Vehicle</option>
      </select>

      <div className="flex space-x-2">
        <input
          type="number"
          name="minPremium"
          placeholder="Min Premium"
          value={filters.minPremium || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="number"
          name="maxPremium"
          placeholder="Max Premium"
          value={filters.maxPremium || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex space-x-2 items-center">
        <label>Sort By:</label>
        <select
          name="sortBy"
          value={filters.sortBy || 'premium'}
          onChange={handleChange}
          className="p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="premium">Premium</option>
        </select>
        <select
          name="sortOrder"
          value={filters.sortOrder || 'asc'}
          onChange={handleChange}
          className="p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export default PolicyFilters;