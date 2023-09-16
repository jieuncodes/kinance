import { useState } from "react";
import { useQuery } from "react-query";
import { OverviewSlider, Title } from "styles/Market";
import { NavBtns, RoundBtn } from "styles/buttons";
import CryptoTable from "./CryptoTable";
import { fetchMarketData } from "services/apiService";
import { MarketData } from "../../../server/src/type/marketTypes";

const Market = () => {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<MarketData>("marketData", fetchMarketData);

  console.log("marketData", marketData);

  const [selectedMarketIdx, setSelectedMarketIdx] = useState<number>(0);
  const marketTypes = ["Spot", "Perpetual", "Futures"];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  //TODO: show 10 and add pagination
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
        {/* {marketData?.slice(0, 10).map((market, index) => (
          <li key={index}>{market.symbol}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default Market;
