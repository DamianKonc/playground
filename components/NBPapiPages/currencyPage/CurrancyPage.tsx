import { useEffect, useState } from "react";

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
    <section>
      <h1>I AM CURRANCY</h1>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <>
          {" "}
          <h2>{currencyRate[0].effectiveDate}</h2>
          <h3>{currencyRate[0].no}</h3>
          <div>{currencyRate[0].table}</div>
          <div>
            {currencyRate[0].rates.map((el) => (
              <div key={el.code}>
                <span>
                  {el.currency}
                  {el.code}
                  {el.mid}
                </span>{" "}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default CurrancyPage;
