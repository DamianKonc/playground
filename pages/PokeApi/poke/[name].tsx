import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const fetchingName = router.query.name;
  console.log(fetchingName);
  fetch(`https://pokeapi.co/api/v2/pokemon/${fetchingName}`)
    .then((data) => data.json())
    .then((el) => console.log(el));
  return <h1>Second try {fetchingName}</h1>;
};

export default Details;
