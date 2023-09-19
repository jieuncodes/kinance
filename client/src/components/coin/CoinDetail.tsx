import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "services/apiService";

import { Currencies, GekcoCoinDetail } from "types/marketTypes";

import CoinSummaryBar from "./CoinSummaryBar";

function CoinDetailPage() {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState<GekcoCoinDetail>();
  const [currTickerIdx, setCurrTickerIdx] = useState(0);
  const [currency, setCurrency] = useState<Currencies>("usd");

  useEffect(() => {
    if (!id) return;
    const getCoinDetail = async (id: string) => {
      const data = await fetchCoinDetails(id);

      if (data) {
        const seenTargets: { [key: string]: boolean } = {};
        data.tickers = data.tickers.filter((ticker) => {
          if (ticker.base !== data.id && !seenTargets[ticker.target]) {
            seenTargets[ticker.target] = true;
            return true;
          }
          return false;
        });
      }
      setCoinDetail(data);
    };
    getCoinDetail(id);
  }, [id]);

  useEffect(() => {}, [currTickerIdx]);

  if (!coinDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CoinSummaryBar
        coinDetail={coinDetail}
        currTickerIdx={currTickerIdx}
        setCurrTickerIdx={setCurrTickerIdx}
        currency={currency}
      />
    </>
  );
}

export default CoinDetailPage;
