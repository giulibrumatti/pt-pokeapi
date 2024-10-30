"use client";

import React from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar Pokémon por nombre..."
      onChange={handleInputChange}
      className="p-2 border border-gray-300 text-black rounded w-full max-w-md mb-4"
    />
  );
};

export default SearchBar;
