import { useEffect, useState } from "react";
import { getMarketData } from "../services/binanceApi";
import { useQuery } from "react-query";
import { BinanceSymbol } from "../types/binance";
import { OverviewSlider, Title } from "styles/Market";
import { NavBtns, RoundBtn } from "styles/buttons";
import SearchBar from "./SearchBar";
import CryptoTable from "./CryptoTable";
import TableNav from "./TableNav";

const Market = () => {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<BinanceSymbol[]>("marketData", getMarketData);
  const [selectedMarketIdx, setSelectedMarketIdx] = useState<number>(0);
  const marketTypes = ["Spot", "Perpetual", "Futures"];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      <Title>Markets</Title>
      <NavBtns>
        {marketTypes.map((type, index) => (
          <RoundBtn
            key={index}
            onClick={() => setSelectedMarketIdx(index)}
            className={`${
              selectedMarketIdx === index && "text-sky-500 border-sky-500"
            }`}
          >
            {type}
          </RoundBtn>
        ))}
      </NavBtns>
      <OverviewSlider />

      <CryptoTable />
      <ul>
        {marketData?.slice(0, 10).map((market, index) => (
          <li key={index}>{market.symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
