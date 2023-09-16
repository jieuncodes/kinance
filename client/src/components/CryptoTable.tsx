import { TableHeaderBox } from "styles/table";
import SearchBar from "./SearchBar";
import TableNav from "./TableNav";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/Table";
import { MarketData } from "../../../server/src/type/marketTypes";
import { useQuery } from "react-query";
import { fetchMarketData } from "services/apiService";
import { formatPercentage, getPercentageColor } from "../util/helpers";
import { Icons } from "components/Icons";

function CryptoTable() {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<MarketData[]>("marketData", fetchMarketData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      <TableHeaderBox>
        <TableNav />
        <SearchBar />
      </TableHeaderBox>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Instrument</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h %</TableHead>
            <TableHead>24h %</TableHead>
            <TableHead>7d %</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Volume(24h)</TableHead>
            <TableHead>Last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData?.map((coin, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Icons.star />
                </TableCell>
                <TableCell>{`${coin.cmc_rank}`}</TableCell>
                <TableCell>
                  <img
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                    alt="logo"
                    className="w-6 h-6 mr-2"
                  />
                  {`${coin.name}`}
                </TableCell>
                <TableCell>
                  {coin.quote.USD?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </TableCell>
                <TableCell
                  style={{
                    color: getPercentageColor(
                      Number(coin.quote.USD?.percent_change_1h)
                    ),
                  }}
                >
                  {formatPercentage(Number(coin.quote.USD?.percent_change_1h))}
                </TableCell>
                <TableCell
                  style={{
                    color: getPercentageColor(
                      Number(coin.quote.USD?.percent_change_24h)
                    ),
                  }}
                >
                  {formatPercentage(Number(coin.quote.USD?.percent_change_24h))}
                </TableCell>
                <TableCell
                  style={{
                    color: getPercentageColor(
                      Number(coin.quote.USD?.percent_change_7d)
                    ),
                  }}
                >
                  {formatPercentage(Number(coin.quote.USD?.percent_change_7d))}
                </TableCell>
                <TableCell>
                  {coin.quote.USD?.market_cap.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </TableCell>
                <TableCell>
                  {coin.quote.USD?.volume_24h?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                  {coin.quote.USD?.volume_24h && coin.quote.USD?.price
                    ? (
                        coin.quote.USD.volume_24h / coin.quote.USD.price
                      ).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      }) + coin.symbol
                    : null}
                </TableCell>{" "}
                <TableCell>graph</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
export default CryptoTable;

const coins = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
];
