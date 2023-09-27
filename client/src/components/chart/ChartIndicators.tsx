import {
  IndicatorBox,
  IndicatorBoxHeader,
  IndicatorOHLC,
  OHLCBox,
  OHLCLabel,
  OHLCValue,
} from "styles/chart";
import { Currencies, D3OHLC } from "types/marketTypes";

function ChartIndicators({
  ticker,
  currency,
  currXDataPoint,
}: {
  ticker: string | undefined;
  currency: Currencies;
  currXDataPoint: D3OHLC | undefined;
}) {
  let indicatorColor =
    currXDataPoint?.close! > currXDataPoint?.open!
      ? "brightgain"
      : "brightloss";

  return (
    <IndicatorBox>
      <IndicatorBoxHeader>
        {ticker?.toUpperCase()}/{currency.toUpperCase()} • 1D
      </IndicatorBoxHeader>
      {/* market state */}
      <IndicatorOHLC>
        {[
          ["O", currXDataPoint?.open],
          ["H", currXDataPoint?.high],
          ["L", currXDataPoint?.low],
          ["C", currXDataPoint?.close],
        ].map((ohlc, index) => (
          <OHLCBox key={index}>
            <OHLCLabel>{ohlc[0]}</OHLCLabel>
            <OHLCValue
              className={`${
                currXDataPoint?.close! > currXDataPoint?.open!
                  ? "text-brightgain"
                  : "text-brightloss"
              }`}
            >
              {ohlc[1]}
            </OHLCValue>
          </OHLCBox>
        ))}
      </IndicatorOHLC>
    </IndicatorBox>
  );
}

export default ChartIndicators;
