import {
  CoinInfoBox,
  LikeStateBox,
  NormBox,
  VerticalInfo,
  VerticalInfoDesc,
  VerticalInfoTitle,
} from "styles/coinInfoRow";
import { FormattedCurrency, cn, getClassNameForValue } from "lib/utils";
import { Icons } from "../Icons";
import VerticalInfoBox from "../VerticalInfoBox";
import { Currencies, GekcoCoinDetail } from "types/marketTypes";
import MarektSelector from "./MarketSelector";

function CoinSummaryBar({
  coinDetail,
  currTickerIdx,
  setCurrTickerIdx,
  currency,
}: {
  coinDetail: GekcoCoinDetail;
  currTickerIdx: number;
  setCurrTickerIdx: React.Dispatch<React.SetStateAction<number>>;
  currency: Currencies;
}) {
  const currentPrice = coinDetail.market_data.current_price[currency];
  const priceChange24h = coinDetail.market_data.price_change_percentage_24h;

  return (
    <CoinInfoBox>
      <LikeStateBox>
        <Icons.star size={20} />
      </LikeStateBox>
      <MarektSelector
        coinDetail={coinDetail}
        currTickerIdx={currTickerIdx}
        setCurrTickerIdx={setCurrTickerIdx}
      />
      <NormBox className={cn("text-sm", getClassNameForValue(currentPrice))}>
        {coinDetail.tickers[currTickerIdx].last.toFixed(2).toLocaleString()}
      </NormBox>
      <NormBox>
        {FormattedCurrency({
          value: coinDetail.market_data.current_price[currency],
          currency,
        })}
      </NormBox>
      <VerticalInfo>
        <VerticalInfoTitle>Change</VerticalInfoTitle>
        <VerticalInfoDesc className={getClassNameForValue(priceChange24h)}>
          {`${priceChange24h.toFixed(2)} %`}
        </VerticalInfoDesc>
      </VerticalInfo>
      <VerticalInfoBox
        title="High"
        desc={coinDetail.market_data.high_24h[currency]}
      />
      <VerticalInfoBox
        title="Low"
        desc={coinDetail.market_data.low_24h[currency]}
      />
      <VerticalInfoBox
        title="Market Cap"
        desc={coinDetail.market_data.market_cap[currency]}
      />
      <VerticalInfoBox
        title="Total Volume"
        desc={Number(coinDetail.tickers[currTickerIdx].volume.toFixed(2))}
      />
    </CoinInfoBox>
  );
}
export default CoinSummaryBar;
