import { useEffect, useState } from "react";
import styles from "./currencyPage.module.scss";

const CurrancyPage = () => {
  const [currencyRate, setCurrencyRate] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A/")
      .then((data) => data.json())
      .then((json) => {
        setLoading(false);
        setCurrencyRate(json);
      });
  }, []);

  console.log(currencyRate);

  return (
    <section className={styles.currencyPage}>
      <h1>I AM CURRANCY</h1>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div className={styles.currencyPage__dataWrapper}>
          <h2>{currencyRate[0].effectiveDate}</h2>
          <h3>{currencyRate[0].no}</h3>
          <div>Table type: {currencyRate[0].table}</div>
          <div className={styles.currencyPage__dataWrapper_datas}>
            {currencyRate[0].rates.map((el) => (
              <div
                className={styles.currencyPage__dataWrapper_datas_el}
                key={el.code}
              >
                <span className={styles.currencyPage__dataWrapper_datas_el_fat}>
                  Currency:
                </span>
                {el.currency}
                <span className={styles.currencyPage__dataWrapper_datas_el_fat}>
                  Code:
                </span>
                {el.code}
                <span className={styles.currencyPage__dataWrapper_datas_el_fat}>
                  Mid price:
                </span>
                {el.mid} zł
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrancyPage;
