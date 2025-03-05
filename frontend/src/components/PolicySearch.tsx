import React, { useState } from 'react';

interface PolicySearchProps {
  onSearch: (search: string) => void;
}

function PolicySearch({ onSearch }: PolicySearchProps) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      
      <input
        type="text"
        placeholder="Search policies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
    </form>
  );
}

export default PolicySearch;