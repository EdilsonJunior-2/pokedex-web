import axios from "axios";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export async function getPokemonList ( limit, offset ) {
    console.log("pokemon?limit=" + limit + "&offset=" + offset);
    const response = await api.get("pokemon?limit=" + limit + "&offset=" + offset);
    return response.data;
}

export async function getPokemon (pokemonName) {
    const response = await api.get("pokemon/" + pokemonName);
    return response.data;
}

export async function getGeneration (generation) {
    const response = await api.get("generation/" + generation);
    return response.data;
}