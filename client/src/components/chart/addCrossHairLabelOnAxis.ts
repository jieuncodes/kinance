import * as d3 from "d3";
import { D3OHLC } from "types/marketTypes";

function addMouseIndicators({
  svg,
  xScale,
  yScale,
  transformedData,
  setCurrXDataPoint,
}: {
  svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
  xScale: d3.ScaleTime<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  transformedData: D3OHLC[];
  setCurrXDataPoint: React.Dispatch<React.SetStateAction<D3OHLC | undefined>>;
}) {
  svg.on("mousemove", function (event) {
    const [mouseX, mouseY] = d3.pointer(event);
    const hoverDate = xScale.invert(mouseX);
    const hoverPrice = yScale.invert(mouseY);

    // chart indicators
    const bisectDate = d3.bisector((d: D3OHLC) => d.date).left;
    const idx = bisectDate(transformedData, hoverDate);
    const closestDataPoint = transformedData[idx - 1];

    if (closestDataPoint) {
      setCurrXDataPoint(closestDataPoint);
    }

    // updateLabels({ svg, hoverDate, hoverPrice });
  });
}
export default addMouseIndicators;
