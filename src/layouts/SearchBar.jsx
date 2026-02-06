
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full h-[38px] max-w-2xl border-2 border-violet-900 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search on Amazon Lite"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
      />

      <button 
        onClick={handleSearch}
        className="bg-slate-800 h-[37px] hover:bg-slate-950 text-white px-4 py-2 flex items-center justify-center"
      >
        <CiSearch className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
