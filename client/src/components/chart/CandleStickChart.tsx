import { D3OHLC, GekcoCoinDetail, GekcoOHLC } from "types/marketTypes";
import { setUpScaleAndAxes } from "./drawAxis";
import * as d3 from "d3";
import addCandleStick from "./addCandleStick";
import { transformToD3OHLC } from "lib/d3Helpers";
import { useEffect, useRef } from "react";
import { ChartSVG } from "styles/chart";
import addCrosshair from "./addCrosshair";

export const CHART_WIDTH = 928;
export const CHART_HEIGHT = 600;
export const MARGIN_BOTTOM = 50;
export const MARGIN_TOP = 50;
export const MARGIN_LEFT = 50;
export const MARGIN_RIGHT = 50;

function CandlestickChart({ data }: { data: GekcoOHLC | null | undefined }) {
  const chartRef = useRef<SVGSVGElement>(null);
  const chartBox = useRef<HTMLDivElement>(null);

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
    addCrosshair({ svg, chartBox });
  }, [data]);

  return (
    <div className={`chart-box bg-red-50/30`} ref={chartBox}>
      <ChartSVG
        ref={chartRef}
        width={CHART_WIDTH}
        height={CHART_HEIGHT}
      ></ChartSVG>
    </div>
  );
}
export default CandlestickChart;
