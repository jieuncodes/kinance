import tw from "tailwind-styled-components";

export const ChartContainer = tw.div`m-12`;
export const ChartSVG = tw.svg``;
export const CandleChartArea = tw.div`chart-box cursor-cell`;

export const IndicatorBox = tw.div`absolute ml-12 mt-12 rounded bg-blue-950/20 px-3 font-light text-white/80`;
export const IndicatorBoxHeader = tw.div``;
export const IndicatorOHLC = tw.div`grid grid-cols-4 w-80`;
export const OHLCBox = tw.div`mr-4`;
export const OHLCLabel = tw.span`mr-1`;
export const OHLCValue = tw.span``;

export const CHART_WIDTH = 928;
export const CHART_HEIGHT = 600;
export const MARGIN_BOTTOM = 50;
export const MARGIN_TOP = 50;
export const MARGIN_LEFT = 50;
export const MARGIN_RIGHT = 50;
