import { NextPage } from "next";
import { useEffect, useState } from "react";

const PokeApi: NextPage = () => {
  const [pokeData, setPokeData] = useState<any[]>([]);
  const [fetchedPokeData, setfetchedPokeData] = useState([]);
  const [pokemons, setPokemons] = useState([]);

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
        console.log(data.results.name);
        const results = data.results;
        // console.log(results);
        console.log(results);
        setPokeData((prev) => [
          { name: data.results.name, imageUrl: data.results.url },
        ]);
      });
  };

  console.log(pokeData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome in PokeApi</h1>
      <ul>
        {/* {pokeData.map((el) => (
          <li key={el.name}>
            {el.name}, {el.url}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default PokeApi;
