import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./PokeApi.module.scss";

const PokeApi: NextPage = () => {
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [singlePokeUrl, setSinglePokeUrl] = useState<string[]>([]);
  const [pokemonDatas, setPokemonDatas] = useState<{}[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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

  return (
    <section>
      <ul className={styles.pokeApi__list}>
        {loading ? (
          <div>LOADING</div>
        ) : (
          pokemonDatas.map((el) => (
            <li className={styles.pokeApi__list_el} key={el.id}>
              <h3>{el.name}</h3>

              <Image
                unoptimized={true}
                alt={el.name}
                loader={() => el.sprites.front_default}
                src={el.sprites.front_default}
                width={130}
                height={150}
              />
              <button onClick={() => router.push(`poke/${el.name}`)}>
                <div className={styles.pokeApi__list_el_btn}>
                  Check this Pokemon
                </div>
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default PokeApi;
