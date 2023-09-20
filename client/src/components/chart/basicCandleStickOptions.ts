import * as d3 from "d3";
import { D3OHLC } from "types/marketTypes";

function basicCandleStickOptions({
  svg,
  ticker,
}: {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  ticker: D3OHLC[];
}) {
  const MARGIN_TOP = 20;
  const MARGIN_RIGHT = 30;
  const MARGIN_BOTTOM = 30;
  const MARGIN_LEFT = 40;
  const CHART_WIDTH = 928;
  const CHART_HEIGHT = 600;

  const xScale = d3
    .scaleBand()
    .domain(ticker.map((d) => "" + d.date))
    .range([0, CHART_WIDTH])
    .paddingInner(0.2)
    .paddingOuter(0)
    .align(0.5);

  const xLabels = xScale.domain().filter((d, i) => {
    if (i === ticker.length - 1) return d;
    let next;
    if (ticker[i + 1]) {
      next = ticker[i + 1].date;
    } else {
      return false;
    }
  });

  const xAxis = d3.axisBottom(xScale).tickValues(xLabels);

  const yIsLinear = true;
  const yDomain = [
    d3.min(ticker, (d) => d.low) || 0,
    d3.max(ticker, (d) => d.high) || 100,
  ];
  const yRange = [CHART_HEIGHT, 0];
  const yScale = d3.scaleLinear().domain(yDomain).range(yRange).nice(5);

  const yAxis = d3.axisLeft(yScale).ticks(5).tickSizeInner(CHART_WIDTH);

  return { xScale, xLabels, xAxis, yIsLinear, yDomain, yRange, yScale, yAxis };
}
export default basicCandleStickOptions;
