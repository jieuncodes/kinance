import { D3OHLC } from "types/marketTypes";
import * as d3 from "d3";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./CandleStickChart";

export const setUpScaleAndAxes = ({
  svg,
  transformedData,
}: {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  transformedData: D3OHLC[];
}) => {
  const xScale = d3
    .scaleUtc()
    .domain([
      transformedData[0].date,
      transformedData[transformedData.length - 1].date,
    ])
    .range([MARGIN_LEFT, CHART_WIDTH - MARGIN_RIGHT]);

  const yFormat = d3.format("$,.2f");
  const yScale = d3
    .scaleLinear()
    .domain([
      d3.min(transformedData, (d) => d.low) as number,
      d3.max(transformedData, (d) => d.high) as number,
    ])
    .range([CHART_HEIGHT - MARGIN_TOP, MARGIN_TOP]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale).tickFormat(yFormat);

  const gx = svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${CHART_HEIGHT - MARGIN_TOP})`);
  gx.transition().duration(750).call(xAxis);

  const xGrid = d3
    .axisBottom(xScale)
    .tickSize(-CHART_HEIGHT + MARGIN_TOP + MARGIN_BOTTOM)
    .tickPadding(10);

  svg
    .append("g")
    .attr("class", "x-grid")
    .attr("transform", `translate(0,${CHART_HEIGHT - MARGIN_TOP})`)
    .call(xGrid);

  const gy = svg
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${MARGIN_LEFT},0)`)
    .call(yAxis);
  gy.transition().duration(750).call(yAxis);

  const yGrid = d3
    .axisLeft(yScale)
    .tickSize(-CHART_WIDTH + MARGIN_LEFT + MARGIN_RIGHT)
    .tickFormat(() => "");
  svg
    .append("g")
    .attr("class", "y-grid")
    .attr("transform", `translate(${MARGIN_LEFT},0)`)
    .call(yGrid);

  return { xScale, yScale };
};
