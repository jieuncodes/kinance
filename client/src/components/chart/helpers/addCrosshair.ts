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
  chartRef: RefObject<SVGSVGElement>;
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
  chartRef,
  xScale,
  yScale,
  transformedData,
  setPointerData,
}: addCrosshairProps) {
  const currOHLC = transformedData[transformedData.length - 1];

  const priceLabelBackground = svg
    .append("rect")
    .classed("price-label-background", true)
    .classed("invisible", false);

  const priceLabel = svg
    .append("text")
    .attr("alignment-baseline", "middle")
    .classed("price-label", true)
    .classed("invisible", false);

  const currPriceLabelBackground = svg
    .append("rect")
    .attr(
      "fill",
      `${
        currOHLC.open > currOHLC.close ? "rgb(190,79,92)" : "rgb(63,137,124)"
      }`,
    )
    .classed("price-label-background", true);

  const currPriceLabel = svg
    .append("text")
    .attr("alignment-baseline", "middle")
    .classed("price-label", true);

  const dateLabelBackground = svg
    .append("rect")
    .classed("date-label-background", true)
    .classed("invisible", false);

  const dateLabel = svg
    .append("text")
    .attr("alignment-baseline", "hanging")
    .classed("date-label", true)
    .classed("invisible", false);

  svg.on("mousemove", function (event) {
    const [mouseX, mouseY] = d3.pointer(event);

    const currHoverDate = xScale.invert(mouseX);
    const currHoverPrice = yScale.invert(mouseY);
    const bisectDate = d3.bisector((d: D3OHLC) => d.date).left;
    const idx = bisectDate(transformedData, currHoverDate);
    const closestDataPoint = transformedData[idx - 1];
    setPointerData(closestDataPoint);

    priceLabelBackground
      .attr("x", CHART_WIDTH - MARGIN_RIGHT + 1)
      .attr("y", mouseY - 10)
      .attr("class", "price-label-background");

    priceLabel
      .attr("x", CHART_WIDTH - MARGIN_RIGHT + 5)
      .attr("y", mouseY)
      .text(currHoverPrice.toFixed(2));

    dateLabelBackground
      .attr("x", mouseX - 45)
      .attr("y", CHART_HEIGHT - MARGIN_BOTTOM);

    dateLabel
      .attr("x", mouseX - 30)
      .attr("y", CHART_HEIGHT - MARGIN_BOTTOM + 5)
      .text(currHoverDate.toLocaleDateString("en-US"));
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

  const currPriceLine = svg
    .append("line")
    .attr(
      "stroke",
      `${
        currOHLC.open > currOHLC.close ? "rgb(190,79,92)" : "rgb(63,137,124)"
      }`,
    )
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "1,1");

  if (chartRef.current) {
    currPriceLine
      .attr("x1", MARGIN_LEFT)
      .attr("x2", CHART_WIDTH - MARGIN_RIGHT + 1)
      .attr("y1", yScale(currOHLC.close))
      .attr("y2", yScale(currOHLC.close));

    currPriceLabelBackground
      .attr("x", CHART_WIDTH - MARGIN_RIGHT + 1)
      .attr("y", yScale(currOHLC.close) - 10)
      .attr("class", "curr-price-label-background");

    currPriceLabel
      .attr("x", CHART_WIDTH - MARGIN_RIGHT + 5)
      .attr("y", yScale(currOHLC.close))
      .text(currOHLC.close.toFixed(2));

    chartRef.current.addEventListener("mousemove", (event: MouseEvent) => {
      const [x, y] = d3.pointer(event, chartRef.current);
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

    chartRef.current.addEventListener("mouseleave", () => {
      verticalLine.attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", 0);
      horizontalLine.attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", 0);
      priceLabel.text("");
      priceLabelBackground.classed("invisible", true);
      dateLabel.text("");
      dateLabelBackground.classed("invisible", true);
    });
  }
}

export default addCrosshair;
