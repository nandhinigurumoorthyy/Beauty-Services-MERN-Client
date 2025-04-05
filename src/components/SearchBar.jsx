import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery.trim()); // Send search query to parent component
  };

  return (
    <div className="pt-5 p-3 w-full sm:w-3/4 md:w-2/3 lg:w-1/2  rounded-lg shadow-md mb-5 mx-auto">
    <form onSubmit={handleSearch} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input - Full Width on Mobile, Larger on Bigger Screens */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full sm:flex-grow border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-950"
        />
  
        {/* Search Button - Full Width on Mobile, Smaller on Bigger Screens */}
        <button
          type="submit"
          className="py-2 px-6 w-full sm:w-auto font-medium rounded-lg hover:bg-red-950 border-2 border-red-950 hover:text-white text-red-950 transition"
        >
          Search
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default SearchBar;
