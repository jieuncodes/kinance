import * as d3 from "d3";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "styles/chart";

function addChartGrid({
  svg,
  xScale,
  yScale,
}: {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
}) {
  const xGrid = d3
    .axisBottom(xScale)
    .tickSize(-CHART_HEIGHT + MARGIN_TOP + MARGIN_BOTTOM)
    .tickPadding(10);

  svg
    .append("g")
    .attr("class", "x-grid")
    .attr("transform", `translate(0,${CHART_HEIGHT - MARGIN_TOP})`)
    .call(xGrid);

  const yGrid = d3
    .axisLeft(yScale)
    .tickSize(-CHART_WIDTH + MARGIN_LEFT + MARGIN_RIGHT)
    .tickFormat(() => "");

  svg
    .append("g")
    .attr("class", "y-grid")
    .attr("transform", `translate(${MARGIN_LEFT},0)`)
    .call(yGrid);
}
export default addChartGrid;
