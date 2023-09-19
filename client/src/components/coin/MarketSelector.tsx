import { useState } from "react";
import { SelectorBox } from "styles/coinInfoRow";
import { GekcoCoinDetail } from "types/marketTypes";

interface MarketSelectorProps {
  coinDetail: GekcoCoinDetail;
  currTickerIdx: number;
  setCurrTickerIdx: React.Dispatch<React.SetStateAction<number>>;
}

function MarektSelector({
  coinDetail,
  currTickerIdx,
  setCurrTickerIdx,
}: MarketSelectorProps) {
  const [value, setValue] = useState<string>(
    `${coinDetail.tickers[0].base}/${coinDetail.tickers[0].target}`,
  );
  const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrTickerIdx(event.target.selectedIndex);
    setValue(event.target.value);
  };

  return (
    <SelectorBox>
      <select
        id="select-targets"
        value={value}
        onChange={handleTargetChange}
        className="bg-transparent focus:outline-none"
      >
        {coinDetail.tickers.map((ticker, index) => {
          return (
            <option key={index} value={ticker.target}>
              {`${ticker.base}/${ticker.target}`}
            </option>
          );
        })}
      </select>
    </SelectorBox>
  );
}

export default MarektSelector;
