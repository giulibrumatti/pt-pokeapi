export async function fetchPikachuDetails() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
  const data = await response.json();
  return data.sprites.other["official-artwork"].front_default;
}
