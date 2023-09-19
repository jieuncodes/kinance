import SearchBar from "components/SearchBar";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { TableNavBox, TableNavLi, TableNavUl } from "styles/table";
import { KinanceServiceMarkets } from "types/marketTypes";

function TableNav({
  setCurrency,
}: {
  setCurrency: Dispatch<SetStateAction<KinanceServiceMarkets>>;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  //TODO: add "Favorites"
  const marketTickers: KinanceServiceMarkets[] = ["usd", "btc", "krw", "eur"];

  useEffect(() => {
    setCurrency(marketTickers[activeIdx]);
  }, [activeIdx]);

  const renderBottomLine = ({ selectedIdx }: { selectedIdx: number }) =>
    activeIdx === selectedIdx ? (
      <TableNavLi
        layoutId="bottomLine"
        className="absolute mt-8 box-border border-b-0 border-t-2 border-sky-400 text-transparent"
      >
        {marketTickers[selectedIdx]}
      </TableNavLi>
    ) : null;

  return (
    <TableNavBox>
      <TableNavUl>
        {marketTickers.map((item, index) => (
          <Fragment key={index}>
            <TableNavLi
              onClick={() => setActiveIdx(index)}
              className={`${index === activeIdx && "text-white"}`}
            >
              {item.toUpperCase()}
              {renderBottomLine({ selectedIdx: index })}
            </TableNavLi>
          </Fragment>
        ))}
      </TableNavUl>
      <SearchBar />
    </TableNavBox>
  );
}

export default TableNav;
