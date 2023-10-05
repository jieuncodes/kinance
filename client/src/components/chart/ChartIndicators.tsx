import {
  IndicatorBox,
  IndicatorBoxHeader,
  IndicatorOHLC,
  OHLCBox,
  OHLCLabel,
  OHLCValue,
} from "styles/chart";
import { Currencies, D3OHLC } from "types/marketTypes";
import { priceColor } from "./helpers/chartColorHelper";

function ChartIndicators({
  ticker,
  currency,
  currXDataPoint,
}: {
  ticker: string | undefined;
  currency: Currencies;
  currXDataPoint: D3OHLC | undefined;
}) {
  console.log("currXDataPoint", currXDataPoint);

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
            <OHLCValue className={`${priceColor(currXDataPoint)}`}>
              {ohlc[1]}
            </OHLCValue>
          </OHLCBox>
        ))}
      </IndicatorOHLC>
    </IndicatorBox>
  );
}

export default ChartIndicators;
