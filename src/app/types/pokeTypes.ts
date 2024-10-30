export interface Pokemon {
    id: string;
    name: string;
    image: string;
}


export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: string;
    name: string;

    abilities: Array<{ ability: { name: string } }>;
    types: Array<{ type: { name: string } }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;

    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;

        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            };
            home: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
            "official-artwork": {
                front_default: string;
                front_shiny: string;
            };
        };
    };
}