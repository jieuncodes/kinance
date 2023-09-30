import { transformToD3OHLC } from "lib/d3Helpers";
import { useEffect } from "react";
import { D3OHLC, GekcoOHLC } from "types/marketTypes";
import * as d3 from "d3";
import { setUpScaleAndAxes } from "components/chart/drawAxis";
import addCandleStick from "components/chart/addCandleStick";
import addChartGrid from "components/chart/addChartGrid";
import addCrosshair from "components/chart/addCrosshair";
import addMouseIndicators from "components/chart/addCrossHairLabelOnAxis";

interface UseCandleStickChartProps {
  chartBoxRef: React.RefObject<HTMLDivElement>;
  chartRef: React.RefObject<SVGSVGElement>;
  OHLCData: GekcoOHLC | null | undefined;
  setCurrXDataPoint: React.Dispatch<React.SetStateAction<D3OHLC | undefined>>;
}

function useCandleStickChart({
  chartBoxRef,
  chartRef,
  OHLCData,
  setCurrXDataPoint,
}: UseCandleStickChartProps) {
  useEffect(() => {
    if (!OHLCData) return;
    const transformedData = transformToD3OHLC(OHLCData);
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const { xScale, yScale } = setUpScaleAndAxes({
      svg,
      transformedData,
    });

    addCandleStick({ svg, transformedData, xScale, yScale });
    addChartGrid({ svg, xScale, yScale });
    addCrosshair({ svg, chartBoxRef });
    addMouseIndicators({
      svg,
      xScale,
      yScale,
      transformedData,
      setCurrXDataPoint,
    });
  }, [OHLCData]);
}
export default useCandleStickChart;
