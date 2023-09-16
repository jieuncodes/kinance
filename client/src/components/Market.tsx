import { useState } from "react";
import { useQuery } from "react-query";
import { OverviewSlider, Title } from "styles/Market";
import { NavBtns, RoundBtn } from "styles/buttons";
import CryptoTable from "./CryptoTable";
import { fetchMarketData } from "services/apiService";
import { MarketData } from "../../../server/src/type/marketTypes";

const Market = () => {
  const [selectedMarketIdx, setSelectedMarketIdx] = useState<number>(0);
  const marketTypes = ["Spot", "Perpetual", "Futures"];

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
    </div>
  );
};

export default Market;
