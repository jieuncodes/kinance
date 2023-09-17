import { Icons } from "components/Icons";
import CoinLogo from "components/coin/CoinLogo";
import { FormattedPercentage } from "components/nums/FormattedPercentage";
import { FormattedCurrency } from "lib/utils";
import { useNavigate } from "react-router-dom";
import { CoinInfo } from "types/marketTypes";
import { TableCell, TableRow } from "../ui/Table";

function CoinRow({ coin }: { coin: CoinInfo }) {
  const navigate = useNavigate();
  const percentChanges = [
    coin.quote.USD?.percent_change_1h,
    coin.quote.USD?.percent_change_24h,
    coin.quote.USD?.percent_change_7d,
  ];
  return (
    <TableRow onClick={() => navigate(`/coin/${coin.id}`)}>
      <TableCell>
        <Icons.star />
      </TableCell>
      <TableCell className="text-center">{coin.cmc_rank}</TableCell>
      <TableCell className="flex flex-row items-center content-center">
        <CoinLogo coinId={coin.id} />

        <span className="mt-2 ml-1"> {coin.name}</span>
        <span className="mt-2 ml-2 opacity-50"> {coin.symbol}</span>
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
        <div className="opacity-50 font-light text-xs">
          {coin.quote.USD?.volume_24h && coin.quote.USD?.price
            ? FormattedCurrency(
                coin.quote.USD.volume_24h / coin.quote.USD.price
              ) +
              " " +
              coin.symbol
            : null}
        </div>
      </TableCell>

      <TableCell>graph</TableCell>
    </TableRow>
  );
}

export default CoinRow;
