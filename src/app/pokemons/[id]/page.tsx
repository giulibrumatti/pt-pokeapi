import { fetchPokemonDetails } from "@/app/api/pokeService";
import { PokemonDetails } from "@/app/types/pokeTypes";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

const PokemonDetailPage = async ({ params }: PokemonDetailPageProps) => {
  const paramsResolved = await params;
  const pokemon: PokemonDetails = await fetchPokemonDetails(paramsResolved.id);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-5xl gap-6 mx-auto mt-4">
        <div className="flex flex-col justify-center h-full">
          <Container>
            <div className="p-4 border border-teal-50 rounded-xl">
              <h1 className="mb-4 text-orange-400 text-4xl font-bold text-center uppercase">
                {pokemon.name}
              </h1>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={300}
                  height={300}
                  className="w-full md:w-[300px] h-auto"
                />
              </div>
              <div className="flex space-x-8 mt-4">
                <div>
                  <p className="text-2xl">Habilidades:</p>
                  <span className="text-red-300 text-xl capitalize">
                    {pokemon.abilities
                      .map((ability) => ability.ability.name)
                      .join(" ; ")}
                  </span>
                  <p className="text-2xl">Tipos:</p>
                  <span className="text-red-300 text-xl capitalize">
                    {pokemon.types.map((type) => type.type.name).join(" ; ")}
                  </span>
                </div>
                <div>
                  <div className="capitalize">
                    {pokemon.stats.map((stat) => (
                      <div key={stat.stat.name}>
                        <span className="text-xl">{stat.stat.name}:</span>{" "}
                        <span className="text-red-300">{stat.base_stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5 justify-center">
                <Link
                  href="/"
                  className="p-2 transition text-2xl duration-150 rounded-lg bg-secundary hover:bg-secundary/50"
                >
                  Volver
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
