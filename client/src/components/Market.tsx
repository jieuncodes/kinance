import { useState } from "react";
import { OverviewSlider, Title } from "styles/Market";
import { NavBtns, RoundBtn } from "styles/buttons";
import CryptoTable from "./table/CryptoTable";
import { Contents } from "styles/globalStyle";

const Market = () => {
  const [selectedMarketIdx, setSelectedMarketIdx] = useState<number>(0);
  const marketTypes = ["Spot", "Perpetual", "Futures"];

  return (
    <Contents>
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
    </Contents>
  );
};

export default Market;
