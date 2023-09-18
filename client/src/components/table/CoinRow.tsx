import { Icons } from "components/Icons";
import CoinSparkLine from "components/chart/SparkLine";
import CoinLogo from "components/coin/CoinLogo";
import { FormattedPercentage } from "components/nums/FormattedPercentage";
import { FormattedCurrency, validateEnvVariable } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { CoinInfo } from "types/marketTypes";
import { TableCell, TableRow } from "../ui/Table";
import { ColCoinName, ColCoinSymbol, USD24Volume } from "styles/table";

function CoinRow({ coin }: { coin: CoinInfo }) {
  const navigate = useNavigate();
  const percentChanges = [
    coin.quote.USD?.percent_change_1h,
    coin.quote.USD?.percent_change_24h,
    coin.quote.USD?.percent_change_7d,
  ];

  return (
    <TableRow onClick={() => navigate(`/coin/${coin.name.toLowerCase()}`)}>
      <TableCell>
        <Icons.star />
      </TableCell>
      <TableCell className="text-center">{coin.cmc_rank}</TableCell>
      <TableCell className="flex flex-row content-center items-center">
        <CoinLogo coinId={coin.id} />
        <ColCoinName> {coin.name}</ColCoinName>
        <ColCoinSymbol> {coin.symbol}</ColCoinSymbol>
      </TableCell>
      <TableCell>{FormattedCurrency(coin.quote.USD?.price)}</TableCell>
      <>
        {percentChanges.map((val, index) => (
          <TableCell key={index}>{FormattedPercentage(val)}</TableCell>
        ))}
      </>
      <TableCell>{FormattedCurrency(coin.quote.USD?.market_cap)}</TableCell>

      <TableCell className="text-right">
        <div>{FormattedCurrency(coin.quote.USD?.volume_24h)}</div>
        <USD24Volume>
          {coin.quote.USD?.volume_24h && coin.quote.USD?.price
            ? FormattedCurrency(
                coin.quote.USD.volume_24h / coin.quote.USD.price,
              ) +
              " " +
              coin.symbol
            : null}
        </USD24Volume>
      </TableCell>

      <TableCell className="p-2">
        <CoinSparkLine coin={coin} />
      </TableCell>
    </TableRow>
  );
}

export default CoinRow;
