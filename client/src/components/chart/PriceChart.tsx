import { D3OHLC, GekcoCoinDetail, GekcoOHLC } from "types/marketTypes";
import * as d3 from "d3";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { fetchCoinOHLC } from "services/apiService";
import { transformToD3OHLC } from "lib/d3Helpers";
import renderCandleStickChart from "./basicCandleStickOptions";

function PriceChart({ id }: { id: string | undefined }) {
  const chartRef = useRef<SVGSVGElement>(null);
  const CHART_WIDTH = 928;
  const CHART_HEIGHT = 600;

  const { isLoading, error, data } = useQuery<GekcoOHLC | null>({
    queryKey: ["OHLC", id],
    queryFn: () => fetchCoinOHLC(id),
  });

  useEffect(() => {
    if (!data) return;
    const transformedData = transformToD3OHLC(data);
    console.log("transformedData", transformedData);

    const svg = d3.select(chartRef.current);

    // Get width and height of the svg
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    // Set up scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.low) as number,
        d3.max(data, (d) => d.high) as number,
      ])
      .range([height, 0]);

    // Set up axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Append axes to the svg
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);
    svg.append("g").attr("class", "y-axis").call(yAxis);

    // Append candles
    svg
      .selectAll(".candle")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "candle")
      .attr("x", (d) => xScale(new Date(d.date)))
      .attr("y", (d) => yScale(d.high))
      .attr("width", 5) // You might want to calculate width dynamically based on the data and chart width
      .attr("height", (d) => yScale(d.low) - yScale(d.high))
      .attr("fill", (d) => (d.open > d.close ? "red" : "green"));

    // Append wicks
    svg
      .selectAll(".wick")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "wick")
      .attr("x1", (d) => xScale(new Date(d.date)) + 2.5) // Adjusting to make line appear in the middle of the rectangle
      .attr("x2", (d) => xScale(new Date(d.date)) + 2.5)
      .attr("y1", (d) => yScale(d.high))
      .attr("y2", (d) => yScale(d.low))
      .attr("stroke", "black");
  }, [data]);

  return (
    <div>
      <svg ref={chartRef} width={CHART_WIDTH} height={CHART_HEIGHT}></svg>
    </div>
  );
}
export default PriceChart;
