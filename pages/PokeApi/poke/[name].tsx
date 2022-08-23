import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./name.module.scss";

const Details = () => {
  const [pokemonDatas, setPokemonDatas] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const fetchingName = router.query.name;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${fetchingName}`)
      .then((data) => data.json())
      .then((el) => {
        setLoading(false);
        return setPokemonDatas(el);
      });
  }, []);

  console.log(pokemonDatas);

  return (
    <div className={styles.singlePokeWrapper}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <h1 className={styles.singlePoke__name}>{pokemonDatas.name}</h1>
          <Image
            className={styles.singlePoke__pic}
            unoptimized={true}
            alt={pokemonDatas.name}
            loader={() => pokemonDatas.sprites.front_default}
            src={pokemonDatas.sprites.front_default}
            width={130}
            height={150}
          />
          <div className={styles.singlePoke__fonts}>
            <h3>Abilities:</h3>
            {pokemonDatas.abilities.map((el) => (
              <span
                className={styles.singlePoke__abilities_el}
                key={el.ability.name}
              >
                {el.ability.name}
              </span>
            ))}
          </div>

          <div className={styles.singlePoke__fonts}>
            <h3>Base stats:</h3>
            {pokemonDatas.stats.map((el) => (
              <div className={styles.singlePoke__stats_el} key={el.stat.name}>
                <span>{el.stat.name}</span>
                <span>{el.base_stat}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
