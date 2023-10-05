import { transformToD3OHLC } from "lib/d3Helpers";
import { useEffect } from "react";
import { GekcoOHLC } from "types/marketTypes";
import * as d3 from "d3";
import { setUpScaleAndAxes } from "components/chart/drawAxis";
import addCandleStick from "components/chart/helpers/addCandleStick";
import addChartGrid from "components/chart/helpers/addChartGrid";
import addCrosshair from "../components/chart/helpers/addCrosshair";
import { useRecoilState } from "recoil";
import {
  currPointerDateState,
  currPointerPriceState,
  currPointerState,
} from "atoms";

interface UseCandleStickChartProps {
  chartBoxRef: React.RefObject<HTMLDivElement>;
  chartRef: React.RefObject<SVGSVGElement>;
  OHLCData: GekcoOHLC | null | undefined;
}

function useCandleStickChart({
  chartBoxRef,
  chartRef,
  OHLCData,
}: UseCandleStickChartProps) {
  const [pointerData, setPointerData] = useRecoilState(currPointerState);
  const [hoverDate, setHoverDate] = useRecoilState<Date>(currPointerDateState);
  const [hoverPrice, setHoverPrice] = useRecoilState<any>(
    currPointerPriceState,
  );
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
    pointerData &&
      addCrosshair({
        svg,
        chartBoxRef,
        xScale,
        yScale,
        transformedData,
        pointerData,
        setPointerData,
        hoverDate,
        setHoverDate,
        hoverPrice,
        setHoverPrice,
      });
  }, [OHLCData]);
}
export default useCandleStickChart;
