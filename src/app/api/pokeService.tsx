import { Pokemon, PokemonResult, PokemonDetails } from "@/app/types/pokeTypes";

export async function fetchPikachuDetails() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
  const data = await response.json();
  return data.sprites.other["official-artwork"].front_default;
}

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();
  return data.results.map((pokemon: PokemonResult, index: number) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png`,
  }));
}

export async function fetchPokemonDetails(id: string): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}
