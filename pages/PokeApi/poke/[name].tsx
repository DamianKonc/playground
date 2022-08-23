import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Details = () => {
  const [pokemonDatas, setPokemonDatas] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(pokemonDatas);

  const router = useRouter();
  const fetchingName = router.query.name;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${fetchingName}`)
      .then((data) => data.json())
      .then((el) => {
        return setPokemonDatas(el);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <h1>{pokemonDatas.name}</h1>
          <Image
            unoptimized={true}
            loader={() => pokemonDatas.sprites.front_default}
            alt={pokemonDatas.name}
            src={pokemonDatas.sprites.front_default}
            width={130}
            height={150}
          />
        </>
      )}
    </div>
  );
};

export default Details;
