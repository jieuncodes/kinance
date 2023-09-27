import { Selection } from "d3";
import { RefObject } from "react";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "./CandleStickChart";
import * as d3 from "d3";

function addCrosshair({
  svg,
  chartBox,
}: {
  svg: Selection<SVGSVGElement | null, unknown, null, undefined>;
  chartBox: RefObject<HTMLDivElement>;
}) {
  const verticalLine = svg
    .append("line")
    .attr("stroke", "gray")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "5,5");

  const horizontalLine = svg
    .append("line")
    .attr("stroke", "gray")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "5,5");

  if (chartBox.current) {
    chartBox.current.addEventListener("mousemove", (event: MouseEvent) => {
      const [x, y] = d3.pointer(event, chartBox.current);
      if (
        !(
          x > MARGIN_LEFT &&
          x < CHART_WIDTH - MARGIN_RIGHT &&
          y > MARGIN_TOP &&
          y < CHART_HEIGHT - MARGIN_BOTTOM
        )
      )
        return;

      verticalLine
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", MARGIN_TOP)
        .attr("y2", CHART_HEIGHT - MARGIN_BOTTOM);

      horizontalLine
        .attr("x1", MARGIN_LEFT)
        .attr("x2", CHART_WIDTH)
        .attr("y1", y)
        .attr("y2", y);
    });
  }
}

export default addCrosshair;
