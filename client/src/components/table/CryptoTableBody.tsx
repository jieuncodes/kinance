import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchDetailedCoinData } from "services/apiService";
import { GekcoListCoin, KinanceServiceMarkets } from "types/marketTypes";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import CoinRow from "./CoinRow";
import RowSkeleton from "./RowSkeleton";
import SortableTableHead from "./SortableTableHead";

function CryptoTableBody({ currency }: { currency: KinanceServiceMarkets }) {
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

  if (error) {
    console.error(error);
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-transparent hover:bg-transparent">
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
        {!isLoading && sortedCoinInfo ? (
          sortedCoinInfo.map((coin, index) => (
            <CoinRow coin={coin} key={coin.id} currency={currency} />
          ))
        ) : (
          <RowSkeleton />
        )}
      </TableBody>
    </Table>
  );
}
export default CryptoTableBody;
