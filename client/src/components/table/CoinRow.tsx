import { Icons } from "components/Icons";
import { TableCell, TableRow } from "../ui/Table";

import { CoinInfo } from "types/marketTypes";
import { FormattedPercentage } from "components/nums/FormattedPercentage";

function CoinRow({ coin }: { coin: CoinInfo }) {
  return (
    <TableRow>
      <TableCell>
        <Icons.star />
      </TableCell>
      <TableCell className="text-center">{coin.cmc_rank}</TableCell>
      <TableCell className="flex flex-row items-center content-center">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
          alt="logo"
          className="w-6 h-6 mr-2 mt-2"
        />
        <span className="mt-2 ml-1"> {coin.name}</span>
        <span className="mt-2 ml-2 opacity-50"> {coin.symbol}</span>
      </TableCell>
      <TableCell>
        {coin.quote.USD?.price?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </TableCell>
      <TableCell>
        {FormattedPercentage(coin.quote.USD?.percent_change_1h)}
      </TableCell>
      <TableCell>
        {FormattedPercentage(coin.quote.USD?.percent_change_24h)}
      </TableCell>
      <TableCell>
        {FormattedPercentage(coin.quote.USD?.percent_change_7d)}
      </TableCell>

      <TableCell>
        {coin.quote.USD?.market_cap?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </TableCell>

      <TableCell className="text-right">
        <div>
          {coin.quote.USD?.volume_24h?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="opacity-50 font-light text-xs">
          {coin.quote.USD?.volume_24h && coin.quote.USD?.price
            ? (coin.quote.USD.volume_24h / coin.quote.USD.price).toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
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
