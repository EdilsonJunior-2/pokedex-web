import React, { useEffect, useState } from 'react';
import { getPokemon, getGeneration } from "../../services/api";
import {
    PokeList,
    PokeBox,
    PokeName,
    PokeImg,
    PokeType
} from "../../styles/home";

// import { Container } from './styles';

function Home() {

    const [pokemonList, setPokemonList] = useState([]);
    //    const limit = 24;
    //    const offset = 0;
    const generation = 2;

    function getAllPokemon() {
        let pokeData = [];
        getGeneration(generation).then(pokeList => {
            for (const pokemon of pokeList.pokemon_species) {
                let promise = getPokemon(pokemon.name).then(data => {
                    return data;
                })
                pokeData.push(promise);
            }
            Promise.all(pokeData).then((data) => {
                data.sort(function (a, b) {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                });
                setPokemonList(data);
            });
        });
    }

    useEffect(() => getAllPokemon(), []);
    console.log(window.location.pathname);

    return (
        <PokeList>
            {pokemonList &&
                pokemonList.map(pokemon => (
                    <PokeBox key={pokemon.id}>
                        <div href={pokemon.id}>
                            <PokeName>
                                {pokemon.name}
                            </PokeName>
                            <PokeImg src={pokemon.sprites.other.dream_world.front_default} alt="pokemonImg" />
                        </div>
                        <div>
                            {pokemon.types.map(type => (
                                <PokeType type={type.type.name}>{type.type.name}</PokeType>
                            ))}
                        </div>
                    </PokeBox>
                ))
            }
        </PokeList>
    );
}

export default Home;