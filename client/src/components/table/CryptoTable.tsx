import { TableHeaderBox } from "styles/table";
import SearchBar from "../SearchBar";
import TableNav from "./TableNav";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import CoinRow from "./CoinRow";
import { CoinInfo, GeckcoListCoin } from "types/marketTypes";
import { useEffect, useState } from "react";
import SortableTableHead from "./SortableTableHead";
import { useQuery } from "@tanstack/react-query";
import { fetchDetailedCoinData, fetchMarket } from "services/apiService";

function CryptoTable() {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<GeckcoListCoin[]>({
    queryKey: ["MarketInfo"],
    queryFn: () => fetchDetailedCoinData(),
  });
  const [sortedCoinInfo, setSortedCoinInfo] = useState<GeckcoListCoin[] | null>(
    null,
  );

  useEffect(() => {
    if (!marketData) return;
    setSortedCoinInfo(marketData);
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
        <TableNav />
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
            <CoinRow coin={coin} key={coin.id} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default CryptoTable;
