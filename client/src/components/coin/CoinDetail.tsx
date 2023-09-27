import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "services/apiService";

import { Currencies, GekcoCoinDetail } from "types/marketTypes";

import CoinSummaryBar from "./CoinSummaryBar";
import { useQuery } from "@tanstack/react-query";
import PriceChart from "components/chart/PriceChart";

function CoinDetailPage() {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState<GekcoCoinDetail>();
  const [currTickerIdx, setCurrTickerIdx] = useState(0);
  const [currency, setCurrency] = useState<Currencies>("usd");

  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchCoinDetails", id],
    queryFn: () => fetchCoinDetails(id),
  });

  useEffect(() => {
    if (!data) return;

    const seenTargets: { [key: string]: boolean } = {};

    const filteredTickers = (data.tickers = data.tickers.filter((ticker) => {
      if (
        ticker.base.toLowerCase() === data.symbol &&
        !seenTargets[ticker.target]
      ) {
        seenTargets[ticker.target] = true;
        return true;
      }
      return false;
    }));

    setCoinDetail({ ...data, tickers: filteredTickers });
  }, [data]);

  if (!coinDetail || isLoading) {
    return <div className="p-12">Loading...</div>;
  }

  return (
    <>
      <CoinSummaryBar
        coinDetail={coinDetail}
        currTickerIdx={currTickerIdx}
        setCurrTickerIdx={setCurrTickerIdx}
        currency={currency}
      />
      <PriceChart coinId={id} ticker={data?.symbol} currency={currency} />
    </>
  );
}

export default CoinDetailPage;
