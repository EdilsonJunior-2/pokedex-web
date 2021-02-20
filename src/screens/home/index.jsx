import React, { useEffect, useState } from 'react';
import { getPokemon, getGeneration } from "../../services/api";
import {
    PokeList,
    PokeBox,
    PokeName,
    PokeImg,
} from "../../styles/home";
import { PokeType } from "../../styles/general";
import { typeName } from "../../services/translator";

const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);
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
                                <PokeType
                                    type={type.type.name}
                                    to={{
                                        pathname: `/type/${type.type.name}`
                                    }}
                                >
                                    <p>{typeName(type.type.name)}</p>
                                </PokeType>
                            ))}
                        </div>
                    </PokeBox>
                ))
            }
        </PokeList>
    );
}

export default Home;