import { Selection } from "d3";
import { RefObject } from "react";
import * as d3 from "d3";
import { D3OHLC } from "types/marketTypes";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
} from "styles/chart";

interface addCrosshairProps {
  svg: Selection<SVGSVGElement | null, unknown, null, undefined>;
  chartBoxRef: RefObject<HTMLDivElement>;
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  transformedData: D3OHLC[];
  pointerData: D3OHLC | null;
  setPointerData: React.Dispatch<React.SetStateAction<D3OHLC | undefined>>;
  hoverDate: Date;
  setHoverDate: React.Dispatch<React.SetStateAction<Date>>;
  hoverPrice: number;
  setHoverPrice: React.Dispatch<React.SetStateAction<number>>;
}

function addCrosshair({
  svg,
  chartBoxRef,
  xScale,
  yScale,
  transformedData,
  setPointerData,
}: addCrosshairProps) {
  const priceLabel = svg
    .append("text")
    .attr("fill", "black")
    .attr("alignment-baseline", "middle");

  const dateLabel = svg
    .append("text")
    .attr("fill", "black")
    .attr("alignment-baseline", "hanging");

  svg.on("mousemove", function (event) {
    const [mouseX, mouseY] = d3.pointer(event);
    const currHoverDate = xScale.invert(mouseX);
    const currHoverPrice = yScale.invert(mouseY);
    const bisectDate = d3.bisector((d: D3OHLC) => d.date).left;
    const idx = bisectDate(transformedData, currHoverDate);
    const closestDataPoint = transformedData[idx - 1];
    setPointerData(closestDataPoint);

    priceLabel
      .attr("x", CHART_WIDTH - MARGIN_RIGHT + 10)
      .attr("y", mouseY)
      .text(currHoverPrice.toFixed(2));

    dateLabel
      .attr("x", mouseX)
      .attr("y", CHART_HEIGHT - MARGIN_BOTTOM + 10)
      .text(currHoverDate.toLocaleDateString());
  });

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

  if (chartBoxRef.current) {
    chartBoxRef.current.addEventListener("mousemove", (event: MouseEvent) => {
      const [x, y] = d3.pointer(event, chartBoxRef.current);
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
        .attr("x2", CHART_WIDTH - MARGIN_RIGHT)
        .attr("y1", y)
        .attr("y2", y);
    });
  }
}

export default addCrosshair;
