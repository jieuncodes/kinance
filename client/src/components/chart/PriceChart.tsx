import { Currencies, Days } from "types/marketTypes";
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
  const [days, setDays] = useState<Days>(30);

  return (
    <>
      <DateSelector setDays={setDays} />
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
