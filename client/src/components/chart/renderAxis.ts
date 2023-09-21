import { D3OHLC } from "types/marketTypes";
import * as d3 from "d3";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MARGIN_LEFT,
  MARGIN_TOP,
} from "./PriceChart";

export const setUpScaleAndAxes = ({
  svg,
  transformedData,
}: {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  transformedData: D3OHLC[];
}) => {
  const xDomain = d3.extent(transformedData, (d) => new Date(d.date)) as [
    Date,
    Date,
  ];

  const xScale = d3.scaleTime().domain(xDomain).range([0, CHART_WIDTH]);

  const yScale = d3
    .scaleLinear()
    .domain([
      d3.min(transformedData, (d) => d.low) as number,
      d3.max(transformedData, (d) => d.high) as number,
    ])
    .range([CHART_HEIGHT, 0]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const gx = svg
    .append("g")
    .attr("class", "x-axis")
    .attr(
      "transform",
      `translate(${MARGIN_LEFT},${CHART_HEIGHT - MARGIN_TOP})`,
    );
  gx.transition().duration(750).call(xAxis);

  const gy = svg
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${MARGIN_LEFT},0)`)
    .call(yAxis);
  gy.transition().duration(750).call(yAxis);

  return { xScale, yScale, xAxis, yAxis };
};
