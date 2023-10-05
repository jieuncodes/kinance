import { D3OHLC } from "types/marketTypes";
import * as d3 from "d3";

interface AddCandleStickProps {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  transformedData: D3OHLC[];
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
}

function addCandleStick({
  svg,
  transformedData,
  xScale,
  yScale,
}: AddCandleStickProps) {
  svg
    .selectAll(".candle")
    .data(transformedData)
    .enter()
    .append("rect")
    .attr("class", "candle")
    .attr("x", (d) => xScale(new Date(d.date)) - 2.5)
    .attr("y", (d) => yScale(Math.max(d.open, d.close)))
    .attr("width", 4)
    .attr("height", (d) =>
      yScale(d.open) - yScale(d.close) >= 0
        ? yScale(d.open) - yScale(d.close)
        : yScale(d.close) - yScale(d.open),
    )
    .attr("fill", (d) =>
      d.open > d.close ? "rgb(190,79,92)" : "rgb(63,137,124)",
    );
  svg
    .selectAll(".wick")
    .data(transformedData)
    .enter()
    .append("line")
    .attr("class", "wick")
    .attr("x1", (d) => xScale(new Date(d.date)) - 0.5)
    .attr("x2", (d) => xScale(new Date(d.date)) - 0.5)
    .attr("y1", (d) => yScale(d.high))
    .attr("y2", (d) => yScale(d.low))
    .attr("stroke", (d) =>
      d.open > d.close ? "rgb(190,79,92)" : "rgb(63,137,124)",
    );
}

export default addCandleStick;
