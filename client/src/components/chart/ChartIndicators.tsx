import { Currencies } from "types/marketTypes";

function ChartIndicators({
  ticker,
  currency,
}: {
  ticker: string | undefined;
  currency: Currencies;
}) {
  return (
    <div className="absolute rounded bg-blue-950/20 px-3 font-light text-white/60">
      <div className="w-fit">
        {ticker?.toUpperCase()}/{currency.toUpperCase()} • 1D
      </div>
      {/* market state */}
    </div>
  );
}
export default ChartIndicators;
