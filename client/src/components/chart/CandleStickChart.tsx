import { useRef, useState } from "react";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  CandleChartArea,
  ChartSVG,
} from "styles/chart";
import { Currencies, Days, GekcoOHLC } from "types/marketTypes";
import ChartIndicators from "./ChartIndicators";
import useCandleStickChart from "hooks/useCandleStickChart";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOHLC } from "services/apiService";
import { useRecoilValue } from "recoil";
import { currPointerState } from "atoms";

function CandleStickChart({
  coinId,
  ticker,
  currency,
}: {
  coinId: string;
  ticker: string;
  currency: Currencies;
}) {
  const [days, setDays] = useState<Days>(30);
  const {
    isLoading: isOHLCDataLoading,
    error: OHLCDataError,
    data: OHLCData,
  } = useQuery<GekcoOHLC | undefined>({
    queryKey: ["OHLC", ticker, currency],
    queryFn: () => fetchCoinOHLC({ id: coinId, currency, days }),
  });

  const chartBoxRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const currPointerData = useRecoilValue(currPointerState);

  useCandleStickChart({
    chartBoxRef,
    chartRef,
    OHLCData,
  });

  return (
    <CandleChartArea ref={chartBoxRef}>
      <ChartIndicators
        ticker={ticker}
        currency={currency}
        currXDataPoint={currPointerData}
      />
      <ChartSVG
        ref={chartRef}
        width={CHART_WIDTH + 10}
        height={CHART_HEIGHT}
      ></ChartSVG>
    </CandleChartArea>
  );
}
export default CandleStickChart;
