import { Currencies, GekcoOHLC } from "types/marketTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOHLC } from "services/apiService";
import { ChartContainer } from "styles/chart";
import CandlestickChart from "./CandleStickChart";
import { useState } from "react";
import ChartIndicators from "./ChartIndicators";

function PriceChart({
  coinId,
  ticker,
  currency,
}: {
  coinId: string | undefined;
  ticker: string | undefined;
  currency: Currencies;
}) {
  const { isLoading, error, data } = useQuery<GekcoOHLC | null>({
    queryKey: ["OHLC", coinId],
    queryFn: () => fetchCoinOHLC({ id: coinId, currency, days: 30 }),
  });
  const [currDay, setCurrDay] = useState<number>(30);
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setCurrDay(Number(event.target.accessKey));
  };
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
        {data && ticker && (
          <CandlestickChart data={data} ticker={ticker} currency={currency} />
        )}
      </ChartContainer>
    </>
  );
}
export default PriceChart;
