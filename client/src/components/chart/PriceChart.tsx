import { Currencies, GekcoOHLC } from "types/marketTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOHLC } from "services/apiService";
import { ChartContainer } from "styles/chart";
import CandlestickChart from "./CandleStickChart";
<<<<<<< HEAD
import { useContext, useState } from "react";
import ChartIndicators from "./ChartIndicators";
import { ChartContext } from "providers/CoinProvider";

function PriceChart({
=======
import { useState } from "react";
import ChartIndicators from "./ChartIndicators";

function PriceChart({
  coinId,
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309
  ticker,
  currency,
}: {
  coinId: string | undefined;
  ticker: string | undefined;
  currency: Currencies;
}) {
<<<<<<< HEAD
  const { isOHLCDataLoading, OHLCDataError, OHLCData } =
    useContext(ChartContext);
=======
  const { isLoading, error, data } = useQuery<GekcoOHLC | null>({
    queryKey: ["OHLC", coinId],
    queryFn: () => fetchCoinOHLC({ id: coinId, currency, days: 30 }),
  });
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309
  const [currDay, setCurrDay] = useState<number>(30);
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setCurrDay(Number(event.target.accessKey));
  };
<<<<<<< HEAD

=======
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309
  return (
    <>
      <select
        name="days"
        id="days-selector"
        className="bg-none text-black"
        onChange={handleDayChange}
      >
        <option value="30">30D</option>
        <option value="60">60D</option>
      </select>

      <ChartContainer>
<<<<<<< HEAD
        {OHLCData && ticker && (
          <CandlestickChart
            data={OHLCData}
            ticker={ticker}
            currency={currency}
          />
=======
        {data && ticker && (
          <CandlestickChart data={data} ticker={ticker} currency={currency} />
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309
        )}
      </ChartContainer>
    </>
  );
}
export default PriceChart;
