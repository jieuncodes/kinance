import { Currencies } from "types/marketTypes";
import { ChartContainer } from "styles/chart";
import CandleStickChart from "./CandleStickChart";
import { useState } from "react";
import DateSelector from "./DateSelector";

function PriceChart({
  coinId,
  ticker,
  currency,
}: {
  coinId: string | undefined;
  ticker: string | undefined;
  currency: Currencies;
}) {
  const [currDay, setCurrDay] = useState<number>(30);

  return (
    <>
      <DateSelector setCurrDay={setCurrDay} />
      <ChartContainer>
        {ticker && coinId && (
          <CandleStickChart
            coinId={coinId}
            ticker={ticker}
            currency={currency}
          />
        )}
      </ChartContainer>
    </>
  );
}
export default PriceChart;
