"use client";
import { Pokemon } from "@/app/types/pokeTypes";
import PokemonBox from "@/components/PokemonBox";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";

interface PokemonSearchProps {
  pokemons: Pokemon[];
}

const PokemonSearch: React.FC<PokemonSearchProps> = ({ pokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pokemons]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <SearchBar onSearch={handleSearch} />
      <div className="relative z-10 grid sm:grid-cols-2 max-w-5xl gap-6 max-auto mt-4 md:grid-cols-4">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <PokemonBox key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>No se encontraron Pokémons</p>
        )}
      </div>
    </div>
  );
};

export default PokemonSearch;
