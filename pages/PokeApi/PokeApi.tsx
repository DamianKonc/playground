import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  //..s

  //..
  useEffect(() => {
    setFirstPokeUrl();
  }, []);

  useEffect(() => {
    getUrls();
  }, [pokeUrl]);

  useEffect(() => {
    setPokemonDatas([]);
    let isCancelled = false;
    singlePokeUrl.map((el) =>
      fetch(el)
        .then((item) => item.json())
        .then((data) => {
          if (!isCancelled) {
            setPokemonDatas((prev) => [...prev, data]);
            setLoading(false);
          }
        })
    );
    return () => {
      isCancelled = true;
    };
  }, [singlePokeUrl]);

  console.log(singlePokeUrl);
  console.log(pokemonDatas);

  return (
    <section>
      <ul className={styles.pokeApi__list}>
        {loading ? (
          <div>LOADING</div>
        ) : (
          pokemonDatas.map((el) => (
            <li className={styles.pokeApi__list_el} key={el.id}>
              {el.name}{" "}
              <Image
                layout="fill"
                className={styles.pokeApi__list_el_img}
                src={el.sprites.front_default}
                alt={el.name}
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default PokeApi;
