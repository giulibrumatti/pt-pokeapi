"use client";
import { Pokemon } from "@/app/types/pokeTypes";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonBox: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-2xl font-bold text-center uppercase text-orange-400">
        {pokemon.name}
      </h3>
      <div className="flex justify-center">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
          className="w-full md:w-[150px] h-auto"
        ></Image>
      </div>

      <div className="flex gap-5 mt-5">
        <Link
          href={`/pokemons/${pokemon.id}`}
          className="p-2 transition duration-150 rounded-lg bg-secundary hover:bg-secundary/50"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default PokemonBox;
