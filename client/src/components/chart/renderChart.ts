import * as d3 from "d3";
import { CoinInfo } from "types/marketTypes";

function renderChart({
  refSVG,
  data,
}: {
  refSVG: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  data: CoinInfo;
}) {
  //   const x = d3
  //     .scaleBand()
  //     .domain(
  //       d3.utcDay
  //         .range(ticker.at(0).Date, +ticker.at(-1).Date + 1)
  //         .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6),
  //     )
  //     .range([marginLeft, width - marginRight])
  //     .padding(0.2);
  //   const y = d3
  //     .scaleLog()
  //     .domain([d3.min(ticker, (d) => d.Low), d3.max(ticker, (d) => d.High)])
  //     .rangeRound([height - marginBottom, marginTop]);
  //   // Create the SVG container.
  //   const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);
  //   // Append the axes.
  //   svg
  //     .append("g")
  //     .attr("transform", `translate(0,${height - marginBottom})`)
  //     .call(
  //       d3
  //         .axisBottom(x)
  //         .tickValues(
  //           d3.utcMonday
  //             .every(width > 720 ? 1 : 2)
  //             .range(ticker.at(0).Date, ticker.at(-1).Date),
  //         )
  //         .tickFormat(d3.utcFormat("%-m/%-d")),
  //     )
  //     .call((g) => g.select(".domain").remove());
  //   svg
  //     .append("g")
  //     .attr("transform", `translate(${marginLeft},0)`)
  //     .call(
  //       d3
  //         .axisLeft(y)
  //         .tickFormat(d3.format("$~f"))
  //         .tickValues(d3.scaleLinear().domain(y.domain()).ticks()),
  //     )
  //     .call((g) =>
  //       g
  //         .selectAll(".tick line")
  //         .clone()
  //         .attr("stroke-opacity", 0.2)
  //         .attr("x2", width - marginLeft - marginRight),
  //     )
  //     .call((g) => g.select(".domain").remove());
  //   // Create a group for each day of data, and append two lines to it.
  //   const g = svg
  //     .append("g")
  //     .attr("stroke-linecap", "round")
  //     .attr("stroke", "black")
  //     .selectAll("g")
  //     .data(ticker)
  //     .join("g")
  //     .attr("transform", (d) => `translate(${x(d.Date)},0)`);
  //   g.append("line")
  //     .attr("y1", (d) => y(d.Low))
  //     .attr("y2", (d) => y(d.High));
  //   g.append("line")
  //     .attr("y1", (d) => y(d.Open))
  //     .attr("y2", (d) => y(d.Close))
  //     .attr("stroke-width", x.bandwidth())
  //     .attr("stroke", (d) =>
  //       d.Open > d.Close
  //         ? d3.schemeSet1[0]
  //         : d.Close > d.Open
  //         ? d3.schemeSet1[2]
  //         : d3.schemeSet1[8],
  //     );
  //   // Append a title (tooltip).
  //   const formatDate = d3.utcFormat("%B %-d, %Y");
  //   const formatValue = d3.format(".2f");
  //   const formatChange = (
  //     (f) => (y0, y1) =>
  //       f((y1 - y0) / y0)
  //   )(d3.format("+.2%"));
  //   g.append("title").text(
  //     (d) => `${formatDate(d.Date)}
  //         Open: ${formatValue(d.Open)}
  //         Close: ${formatValue(d.Close)} (${formatChange(d.Open, d.Close)})
  //         Low: ${formatValue(d.Low)}
  //         High: ${formatValue(d.High)}`,
  //   );
  //   return svg.node();
}

export default renderChart;
