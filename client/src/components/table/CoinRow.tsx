import { Icons } from "components/Icons";
import CoinSparkLine from "components/chart/SparkLine";
import { FormattedPercentage } from "components/nums/FormattedPercentage";
import { FormattedCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { GekcoListCoin, KinanceServiceMarkets } from "types/marketTypes";
import { TableCell, TableRow } from "../ui/Table";
import {
  CoinLogoIcon,
  CoinNameCell,
  ColCoinName,
  ColCoinSymbol,
} from "styles/table";
function CoinRow({
  coin,
  currency,
}: {
  coin: GekcoListCoin;
  currency: KinanceServiceMarkets;
}) {
  const navigate = useNavigate();

  const percentChanges = [coin.price_change_percentage_24h];

  return (
    <TableRow onClick={() => navigate(`/coin/${coin.name.toLowerCase()}`)}>
      <TableCell className="pr-0">
        <Icons.star />
      </TableCell>
      <TableCell className="px-0 text-center">{coin.market_cap_rank}</TableCell>
      <CoinNameCell className="w-52">
        <CoinLogoIcon src={coin.image} alt={"logo"} />
        <div className="truncate">
          <ColCoinName> {coin.name}</ColCoinName>
          <ColCoinSymbol>{coin.symbol.toUpperCase()}</ColCoinSymbol>
        </div>
      </CoinNameCell>
      <TableCell>
        {FormattedCurrency({ value: coin.current_price, currency })}
      </TableCell>
      {percentChanges.map((val, index) => (
        <TableCell key={index} className="w-10">
          {FormattedPercentage(val)}
        </TableCell>
      ))}
      <TableCell className="justify-end text-right">
        {FormattedCurrency({ value: coin.total_volume, currency })}
      </TableCell>

      <TableCell className=" justify-end text-right">
        {FormattedCurrency({ value: coin.market_cap, currency })}
      </TableCell>

      <TableCell className=" p-2">
        <CoinSparkLine prices={coin.sparkline_in_7d.price} />
      </TableCell>
    </TableRow>
  );
}

export default CoinRow;
