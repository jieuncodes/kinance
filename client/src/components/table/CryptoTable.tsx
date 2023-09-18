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
import { useQuery } from "react-query";
import { fetchMarket } from "services/apiService";
import CoinRow from "./CoinRow";
import { CoinInfo } from "types/marketTypes";
import { useEffect, useState } from "react";
import SortableTableHead from "./SortableTableHead";

function CryptoTable() {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<CoinInfo[]>("CoinInfo", fetchMarket);
  const [sortedCoinInfo, setSortedCoinInfo] = useState<CoinInfo[] | null>(null);

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
              ["Name", "name"],
              ["Price", "quote.USD.price"],
              ["1h %", "quote.USD.percent_change_1h"],
              ["24h %", "quote.USD.percent_change_24h"],
              ["7d %", "quote.USD.percent_change_7d"],
              ["Market Cap", "quote.USD.market_cap"],
              ["Volume(24h)", "quote.USD.volume_24h"],
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
