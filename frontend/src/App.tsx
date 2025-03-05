import { useState, useEffect } from 'react';
import axios from 'axios'
import { IPolicy, IPolicyFilters } from '@/types/policyTypes';
import PolicySearch from '@/components/PolicySearch';
import PolicyFilters from '@/components/PolicyFilters';
import PolicyTable from '@/components/PolicyTable';


function App() {
  const [loading, setLoading] = useState(false)
  const [policies, setPolicies] = useState<IPolicy[]>([]);
  const [filters, setFilters] = useState<IPolicyFilters>({
    search: '',
    minPremium: undefined,
    maxPremium: undefined,
    policyType: undefined,
    minCoverage: undefined,
    sortBy: 'premium',
    sortOrder: 'asc'
  });

  useEffect(() => {
    fetchPolicies();
  }, [filters]);

  const fetchPolicies = async () => {
    const queryParams = new URLSearchParams(
      Object.entries(filters).filter(([, value]) => value !== undefined && value !== '')
    ).toString();

    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:5000/api/policies?${queryParams}`);
      const data: IPolicy[] = await response.data;
      setPolicies(data);
    } catch (error) {
      console.error('Error fetching policies:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Insurance Policy Platform</h1>
      <PolicySearch
        onSearch={(search) => setFilters(prev => ({ ...prev, search }))}
      />
      <PolicyFilters
        filters={filters}
        onFilterChange={setFilters}
      />
      <PolicyTable
        policies={policies}
        loading={loading}
      />
    </div>
  );
}

export default App;