import { NextPage } from "next";
import { useEffect, useState } from "react";

import styles from "./PokeApi.module.scss";

const PokeApi: NextPage = () => {
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [singlePokeUrl, setSinglePokeUrl] = useState<string[]>([]);
  const [pokemonDatas, setPokemonDatas] = useState<{}[]>([]);
  const [loading, setLoading] = useState(false);

  const setFirstPokeUrl = () => {
    setPokeUrl("https://pokeapi.co/api/v2/pokemon/");
  };

  const getUrls = () => {
    setSinglePokeUrl([]);
    fetch(pokeUrl)
      .then((data) => data.json())
      .then((data) =>
        data.results.map((el) => setSinglePokeUrl((prev) => [...prev, el.url]))
      );
  };
  //..
  const getPokemonDatas = () => {
    setLoading(true);
    setPokemonDatas([]);
    const fetchingData = () =>
      singlePokeUrl.map((el) =>
        fetch(el)
          .then((item) => item.json())
          .then((data) => {
            setPokemonDatas((prev) => [...prev, data]);
            setLoading(false);
          })
      );

    setTimeout(fetchingData, 200);
  };

  useEffect(() => {
    setFirstPokeUrl();
    getUrls();
  }, []);

  useEffect(() => {
    getPokemonDatas();
  }, [pokeUrl]);
  //.
  return (
    <section>
      <ul>
        {loading ? (
          <div>LOADING</div>
        ) : (
          pokemonDatas.map((el) => (
            <li key={el.id}>
              {el.name} <img src={el.sprites.front_default} alt={el.name} />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default PokeApi;
