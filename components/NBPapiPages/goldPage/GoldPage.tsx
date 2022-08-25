import { useEffect, useState } from "react";
import styles from "./goldpage.module.scss";
import LineChart from "../../LineChart/LineChart";

const GoldPage = () => {
  const [goldStats, setGoldStats] = useState();
  const [goldDatas, setGoldDatas] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentData = new Date().toISOString().split("T")[0];
    const oneYearFromNow = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    )
      .toISOString()
      .split("T")[0];

    fetch(`http://api.nbp.pl/api/cenyzlota/${oneYearFromNow}/${currentData}/`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        setGoldDatas(json);
      });

    fetch("http://api.nbp.pl/api/cenyzlota/today/")
      .then((data) => data.json())
      .then((json) => {
        setLoading(false);
        setGoldStats(json);
      });
  }, []);

  return (
    <section className={styles.goldPage}>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <>
          <div className={styles.goldPage__currentPrice}>
            <h3>Current Price:</h3>
            <div>{goldStats[0].cena}zł/g</div>
          </div>
          <div className={styles.goldPage__currentPrice_goldChart}>
            <div>One year gold chart</div>
            <LineChart />
          </div>
        </>
      )}
    </section>
  );
};

export default GoldPage;
