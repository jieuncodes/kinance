import { Fragment, useState } from "react";
import { TableNavLi, TableNavUl } from "styles/table";

function TableNav() {
  const [activeIdx, setActiveIdx] = useState(0);
  const marketTickers = ["Favorites", "All", "USD", "USDT", "BTC", "EUR"];

  const renderBottomLine = ({ selectedIdx }: { selectedIdx: number }) =>
    activeIdx === selectedIdx ? (
      <TableNavLi
        layoutId="bottomLine"
        className="absolute mt- border-t-2 border-sky-400 border-b-0 box-border text-transparent"
      >
        {marketTickers[selectedIdx]}
      </TableNavLi>
    ) : null;

  return (
    <TableNavUl>
      {marketTickers.map((item, index) => (
        <Fragment key={index}>
          <TableNavLi
            onClick={() => setActiveIdx(index)}
            className={`${index === activeIdx && "text-white"}`}
          >
            {item}
            {renderBottomLine({ selectedIdx: index })}
          </TableNavLi>
        </Fragment>
      ))}
    </TableNavUl>
  );
}

export default TableNav;
