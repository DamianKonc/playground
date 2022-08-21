import { NextPage } from "next";
import { useEffect, useState } from "react";

const PokeApi: NextPage = () => {
  const [pokemonData, setPokemonData] = useState<{}[]>([]);

  const getData = async () => {
    const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/");
    fetchPromise
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData([]);
        const resp = data.results.map((el) => fetch(el.url));
        resp.map((el) =>
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
      });
  };
  console.log(pokemonData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome in PokeApi</h1>
      <ul>
        {pokemonData.map((el) => (
          <li key={el.id}>
            {el.name}, {el.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeApi;
