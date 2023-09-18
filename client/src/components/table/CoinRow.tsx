import { Icons } from "components/Icons";
import CoinSparkLine from "components/chart/SparkLine";
import { FormattedPercentage } from "components/nums/FormattedPercentage";
import { FormattedCurrency, validateEnvVariable } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { GekcoListCoin, KinanceServiceMarkets } from "types/marketTypes";
import { TableCell, TableRow } from "../ui/Table";
import { ColCoinName, ColCoinSymbol } from "styles/table";

function CoinRow({
  coin,
  currency,
}: {
  coin: GekcoListCoin;
  currency: KinanceServiceMarkets;
}) {
  const navigate = useNavigate();
  //replace with duplicate 24hs
  const percentChanges = [
    coin.price_change_percentage_24h,
    coin.price_change_percentage_24h,
    coin.price_change_percentage_24h,
  ];

  return (
    <TableRow onClick={() => navigate(`/coin/${coin.name.toLowerCase()}`)}>
      <TableCell>
        <Icons.star />
      </TableCell>
      <TableCell className="text-center">{coin.market_cap_rank}</TableCell>
      <TableCell className="flex flex-row content-center items-center">
        <img src={coin.image} alt={"logo"} className="mr-2 mt-2 h-6 w-6" />
        <ColCoinName> {coin.name}</ColCoinName>
        <ColCoinSymbol className="opacity-30">
          {coin.symbol.toUpperCase()}
        </ColCoinSymbol>
      </TableCell>
      <TableCell>
        {FormattedCurrency({ value: coin.current_price, currency })}
      </TableCell>
      <>
        {percentChanges.map((val, index) => (
          <TableCell key={index}>{FormattedPercentage(val)}</TableCell>
        ))}
      </>
      <TableCell>
        {FormattedCurrency({ value: coin.total_volume, currency })}
      </TableCell>

      <TableCell className="text-right">
        {FormattedCurrency({ value: coin.market_cap, currency })}
      </TableCell>

      <TableCell className="p-2">
        <CoinSparkLine prices={coin.sparkline_in_7d.price} />
      </TableCell>
    </TableRow>
  );
}

export default CoinRow;
