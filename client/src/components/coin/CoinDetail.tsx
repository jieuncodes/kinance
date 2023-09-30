import PriceChart from "components/chart/PriceChart";
import CoinSummaryBar from "./CoinSummaryBar";
import { ChartContext } from "providers/CoinProvider";
import { useContext, useEffect, useState } from "react";
import { Currencies, GekcoCoinDetail } from "types/marketTypes";

function CoinDetails({ currency }: { currency: Currencies }) {
  const { isCoinMetaDataLoading, coinMetaDataError, coinMetaData } =
    useContext(ChartContext);

  const [coinDetail, setCoinDetail] = useState<GekcoCoinDetail>();
  const [currTickerIdx, setCurrTickerIdx] = useState(0);

  useEffect(() => {
    if (!coinMetaData) return;

    const seenTargets: { [key: string]: boolean } = {};

    const filteredTickers = (coinMetaData.tickers = coinMetaData.tickers.filter(
      (ticker) => {
        if (
          ticker.base.toLowerCase() === coinMetaData.symbol &&
          !seenTargets[ticker.target]
        ) {
          seenTargets[ticker.target] = true;
          return true;
        }
        return false;
      },
    ));

    setCoinDetail({ ...coinMetaData, tickers: filteredTickers });
  }, [coinMetaData]);

  if (!coinDetail || isCoinMetaDataLoading) {
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
      <PriceChart
        coinId={coinMetaData?.id}
        ticker={coinMetaData?.symbol}
        currency={currency}
      />
    </>
  );
}
export default CoinDetails;
