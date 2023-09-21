import * as d3 from "d3";
import { GekcoOHLC } from "types/marketTypes";
import { useQuery } from "@tanstack/react-query";
import { transformToD3OHLC } from "lib/d3Helpers";
import { useEffect, useRef } from "react";
import { fetchCoinOHLC } from "services/apiService";
import { setUpScaleAndAxes } from "./drawAxis";
import addCandleStick from "./addCandleStick";

export const CHART_WIDTH = 928;
export const CHART_HEIGHT = 600;
export const MARGIN_TOP = 50;
export const MARGIN_LEFT = 50;

function PriceChart({ id }: { id: string | undefined }) {
  const chartRef = useRef<SVGSVGElement>(null);

  const { isLoading, error, data } = useQuery<GekcoOHLC | null>({
    queryKey: ["OHLC", id],
    queryFn: () => fetchCoinOHLC(id),
  });

  useEffect(() => {
    if (!data) return;
    const transformedData = transformToD3OHLC(data);
    console.log("transformedData", transformedData);

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const { xScale, yScale, xAxis, yAxis } = setUpScaleAndAxes({
      svg,
      transformedData,
    });
    addCandleStick({ svg, transformedData, xScale, yScale });
  }, [data]);

  return (
    <>
      <div className="m-12">
        <svg ref={chartRef} width={CHART_WIDTH} height={CHART_HEIGHT}>
          asdf
        </svg>
      </div>
    </>
  );
}
export default PriceChart;
