import { NextPage } from "next";
import { useEffect, useState } from "react";

const NBPApi: NextPage = () => {
  const [fetchingFrom, setFetchingFrom] = useState<string>();
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/rates/C/978/")
      .then((data) => data.json())
      .then((json) => console.log(json));
  }, []);

  const setWhatYouWant = (e) => {
    console.log(e.target.value);
    setFetchingFrom(e.target.value);
  };

  const expr = "Currency";
  return (
    <section>
      {!fetchingFrom && <div>Wybierz co Cię interesuje</div>}
      <div>
        <button value={"Gold"} onClick={setWhatYouWant}>
          Złoto
        </button>
        <button value={"Currency"} onClick={setWhatYouWant}>
          Waluty
        </button>
      </div>

      {(() => {
        switch (fetchingFrom) {
          case "Gold":
            return <div>Gold</div>;
          case "Currency":
            return <div>Currency</div>;
          default:
            return null;
        }
      })()}
    </section>
  );
};

export default NBPApi;
