import { Currencies } from "types/marketTypes";
import { ChartContainer } from "styles/chart";
import CandlestickChart from "./CandleStickChart";
import { useContext, useState } from "react";
import { ChartContext } from "providers/CoinProvider";

function PriceChart({
  ticker,
  currency,
}: {
  coinId: string | undefined;
  ticker: string | undefined;
  currency: Currencies;
}) {
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
        {ticker && <CandlestickChart ticker={ticker} currency={currency} />}
      </ChartContainer>
    </>
  );
}
export default PriceChart;
