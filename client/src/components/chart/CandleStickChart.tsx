import { ChartContext } from "providers/CoinProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { CandleChartArea, ChartSVG } from "styles/chart";
import { Currencies, D3OHLC, GekcoOHLC } from "types/marketTypes";
import ChartIndicators from "./ChartIndicators";
import useCandleStickChart from "hooks/useCandleStickChart";

export const CHART_WIDTH = 928;
export const CHART_HEIGHT = 600;
export const MARGIN_BOTTOM = 50;
export const MARGIN_TOP = 50;
export const MARGIN_LEFT = 50;
export const MARGIN_RIGHT = 50;

function CandlestickChart({
  ticker,
  currency,
}: {
  ticker: string;
  currency: Currencies;
}) {
  const { isOHLCDataLoading, OHLCDataError, OHLCData } =
    useContext(ChartContext);

  const chartBoxRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const [currXDataPoint, setCurrXDataPoint] = useState<D3OHLC>();

  useCandleStickChart({
    chartBoxRef,
    chartRef,
    OHLCData,
    setCurrXDataPoint,
  });

  return (
    <CandleChartArea ref={chartBoxRef}>
      <ChartIndicators
        ticker={ticker}
        currency={currency}
        currXDataPoint={currXDataPoint}
      />
      <ChartSVG
        ref={chartRef}
        width={CHART_WIDTH + 10}
        height={CHART_HEIGHT}
      ></ChartSVG>
    </CandleChartArea>
  );
}
export default CandlestickChart;
