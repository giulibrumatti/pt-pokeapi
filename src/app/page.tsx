import Container from "@/components/Container";
import PokemonSearch from "@/components/PokemonSearch";
import { fetchPokemons } from "./api/pokeService";
import { Pokemon } from "./types/pokeTypes";

export default async function Home() {
  const pokemons: Pokemon[] = await fetchPokemons();
  return (
    <main className="flex min-h-[100vh] h-full">
      <Container>
        <PokemonSearch pokemons={pokemons}></PokemonSearch>
      </Container>
    </main>
  );
}
