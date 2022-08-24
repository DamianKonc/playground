import { NextPage } from "next";
import { MouseEventHandler, SyntheticEvent, useEffect, useState } from "react";
import styles from "./nbpapi.module.scss";

import GoldPage from "../../components/NBPapiPages/goldPage/GoldPage";
import CurrancyPage from "../../components/NBPapiPages/currencyPage/CurrancyPage";

const NBPApi: NextPage = () => {
  const [fetchingFrom, setFetchingFrom] = useState<string>();
  const [datas, setDatas] = useState();

  const setWhatYouWant = (e: SyntheticEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    setFetchingFrom(e.currentTarget.value);
  };

  const expr = "Currency";
  return (
    <section className={styles.nbpapi}>
      {!fetchingFrom && <div>Wybierz co Cię interesuje</div>}
      <div className={styles.nbpapi__btnWrapper}>
        <button
          className={styles.nbpapi__btnWrapper_el}
          value={"Gold"}
          onClick={setWhatYouWant}
        >
          Złoto
        </button>
        <button
          className={styles.nbpapi__btnWrapper_el}
          value={"Currency"}
          onClick={setWhatYouWant}
        >
          Waluty
        </button>
      </div>

      {(() => {
        switch (fetchingFrom) {
          case "Gold":
            return <GoldPage />;
          case "Currency":
            return <CurrancyPage />;
          default:
            return null;
        }
      })()}
    </section>
  );
};

export default NBPApi;
