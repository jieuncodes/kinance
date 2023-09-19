import { CoinInfo } from "types/marketTypes";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import renderChart from "./renderChart";

function Chart({ data }: { data: CoinInfo }) {
  const chartRef = useRef<SVGSVGElement>(null);
  const width = 928;
  const height = 600;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  useEffect(() => {
    let svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    try {
    } catch (error) {
      console.error("Failed to draw a chart.:", error);
      renderChart({ refSVG: svg, data });
    }
  }, [data]);

  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
}
export default Chart;
