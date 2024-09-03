/** @format */

import React from "react";

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 mb-6 text-lg text-[#333333] bg-gray-200 rounded-lg focus:outline-none focus:bg-white transition duration-300"
    />
  );
}

export default SearchBar;
