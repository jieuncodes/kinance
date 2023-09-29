import { Currencies, D3OHLC, GekcoOHLC } from "types/marketTypes";
import { setUpScaleAndAxes } from "./drawAxis";
import * as d3 from "d3";
import addCandleStick from "./addCandleStick";
import { transformToD3OHLC } from "lib/d3Helpers";
import { useEffect, useRef, useState } from "react";
import { CandleChartArea, ChartSVG } from "styles/chart";
import addCrosshair from "./addCrosshair";
import ChartIndicators from "./ChartIndicators";
import addChartGrid from "./addChartGrid";
<<<<<<< HEAD
import addCrosshairLabelOnAxis from "./addCrossHairLabelOnAxis";
import addMouseIndicators from "./addCrossHairLabelOnAxis";
=======
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309

export const CHART_WIDTH = 928;
export const CHART_HEIGHT = 600;
export const MARGIN_BOTTOM = 50;
export const MARGIN_TOP = 50;
export const MARGIN_LEFT = 50;
export const MARGIN_RIGHT = 50;

function CandlestickChart({
  data,
  ticker,
  currency,
}: {
  data: GekcoOHLC;
  ticker: string;
  currency: Currencies;
}) {
  const chartRef = useRef<SVGSVGElement>(null);
  const chartBox = useRef<HTMLDivElement>(null);
  //TODO: add init state for currXDataPoint
  const [currXDataPoint, setCurrXDataPoint] = useState<D3OHLC>();

  useEffect(() => {
    if (!data) return;
    const transformedData = transformToD3OHLC(data);
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const { xScale, yScale } = setUpScaleAndAxes({
      svg,
      transformedData,
    });

    addCandleStick({ svg, transformedData, xScale, yScale });
    addChartGrid({ svg, xScale, yScale });
    addCrosshair({ svg, chartBox });
<<<<<<< HEAD
    addMouseIndicators({
      svg,
      xScale,
      yScale,
      transformedData,
      setCurrXDataPoint,
=======

    svg.on("mousemove", function (event) {
      const mouseX = d3.pointer(event)[0];
      const hoverDate = xScale.invert(mouseX);

      const bisectDate = d3.bisector((d: D3OHLC) => d.date).left;
      const idx = bisectDate(transformedData, hoverDate);
      const closestDataPoint = transformedData[idx - 1];
      if (closestDataPoint) {
        setCurrXDataPoint(closestDataPoint);
      }
>>>>>>> 5f1fb447e05df969693c3da8e2a423d17d743309
    });
  }, [data]);

  return (
    <CandleChartArea ref={chartBox}>
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
