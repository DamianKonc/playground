import { NextPage } from "next";
import { useEffect, useState } from "react";

import styles from "./PokeApi.module.scss";

const PokeApi: NextPage = () => {
  const [pokemonData, setPokemonData] = useState<{}[]>([]);
  const [pokemonApiLink, setPokemonApiLink] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [curretPokemonName, setCurrentPokemonName] = useState("");

  const getData = async (pokeLink) => {
    const fetchPromise = fetch(pokeLink);
    fetchPromise
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const resp = data.results.map((el) => fetch(el.url));

        const addItems = async (items) => {
          setPokemonData([]);
          items.map((el) =>
            el
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => {
                setPokemonData((prev) => [...prev, data]);
              })
          );
        };
        addItems(resp);
      });
  };

  const handlePokemonName = (e) => {
    setCurrentPokemonName(e.currentTarget.value);
  };

  const PickCurrentPokemon = () => {
    const pokemonApi = "https://pokeapi.co/api/v2/pokemon/";
    const pokemon = `https://pokeapi.co/api/v2/pokemon/${curretPokemonName}`;

    const getPokemonApi = fetch(pokemonApi);
    const getPokemon = fetch(pokemon);

    Promise.all([getPokemonApi, getPokemon])
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((results) => console.log(results[1]));
  };

  useEffect(() => {
    setPokemonData([]);
    getData(pokemonApiLink);
  }, [pokemonApiLink]);
  // ........
  return (
    <div>
      <h1>Welcome in PokeApi</h1>
      <label>
        Pick Pokemon
        <input value={curretPokemonName} onChange={handlePokemonName} />
        <button onClick={PickCurrentPokemon}>Choose this pokemon</button>
      </label>
      <ul className={styles.pokeApi__list}>
        {pokemonData.map((el) => (
          <li className={styles.pokeApi__list_el} key={el.id}>
            <h3>{el.name}</h3>
            <img alt={el.name} src={el.sprites.front_default} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeApi;
