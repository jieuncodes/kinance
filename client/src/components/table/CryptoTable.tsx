import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchDetailedCoinData, fetchMarket } from "services/apiService";
import { TableHeaderBox } from "styles/table";
import { GekcoListCoin, KinanceServiceMarkets } from "types/marketTypes";
import SearchBar from "../SearchBar";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import CoinRow from "./CoinRow";
import SortableTableHead from "./SortableTableHead";
import TableNav from "./TableNav";

function CryptoTable() {
  const [currency, setCurrency] = useState<KinanceServiceMarkets>("usd");
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<GekcoListCoin[]>({
    queryKey: ["MarketInfo", currency],
    queryFn: () => fetchDetailedCoinData({ currency }),
  });
  const [sortedCoinInfo, setSortedCoinInfo] = useState<GekcoListCoin[] | null>(
    null,
  );

  useEffect(() => {
    console.log("Market data changed:", marketData);
    if (!marketData) return;
    setSortedCoinInfo(marketData);
    console.log("set done");
  }, [marketData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      <TableHeaderBox>
        <TableNav setCurrency={setCurrency} />
        <SearchBar />
      </TableHeaderBox>
      <Table>
        <TableHeader>
          <TableRow className="bg-transparent hover:bg-transparent ">
            <TableHead>{""}</TableHead>
            <TableHead>Rank</TableHead>
            {[
              ["Coin", "name"],
              ["Price", "current_price"],
              ["1h", "price_change_percentage_24h"],
              ["24h", "price_change_percentage_24h"],
              ["7d", "price_change_percentage_24h"],
              ["24h Volume", "total_volume"],
              ["Market Cap", "market_cap"],
            ].map((col, index) => (
              <SortableTableHead
                key={index}
                colKey={col[1]}
                colName={col[0]}
                marketData={marketData}
                setSortedData={setSortedCoinInfo}
              />
            ))}
            <TableHead className="text-center">Last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCoinInfo?.map((coin, index) => (
            <CoinRow coin={coin} key={coin.id} currency={currency} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default CryptoTable;
