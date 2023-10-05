import tw from "tailwind-styled-components";

export const ChartContainer = tw.div`m-12 `;
export const ChartSVG = tw.svg`overflow-visible`;
export const CandleChartArea = tw.div`chart-box cursor-cell`;

export const IndicatorBox = tw.div`absolute rounded py-3 bg-blue-950/20 px-6 pr-2 font-light text-white/80`;
export const IndicatorBoxHeader = tw.div``;
export const IndicatorOHLC = tw.div`grid grid-cols-4 w-80`;
export const OHLCBox = tw.div`mr-4`;
export const OHLCLabel = tw.span`mr-1`;
export const OHLCValue = tw.span``;

export const CHART_WIDTH = 800;
export const CHART_HEIGHT = 500;
export const MARGIN_BOTTOM = 0;
export const MARGIN_TOP = 0;
export const MARGIN_LEFT = 0;
export const MARGIN_RIGHT = 50;
