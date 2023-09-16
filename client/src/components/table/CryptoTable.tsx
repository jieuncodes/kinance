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
import SortBtn from "components/btns/SortBtn";
import { useMemo, useState } from "react";

function CryptoTable() {
  const {
    data: CoinInfo,
    error,
    isLoading,
  } = useQuery<CoinInfo[]>("CoinInfo", fetchMarket);

  const [isNameAscending, setIsNameAscending] = useState<boolean | null>(null);

  const sortedCoinInfo = useMemo(() => {
    if (isNameAscending === null) return CoinInfo;

    if (CoinInfo) {
      return [...CoinInfo].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (isNameAscending) {
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else {
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
      });
    }
    return CoinInfo;
  }, [CoinInfo, isNameAscending]);

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
          <TableRow className="bg-transparent hover:bg-transparent">
            <TableHead></TableHead>
            <TableHead>Rank</TableHead>
            <TableHead className="flex flex-row items-center gap-2">
              <span>Name</span>
              <SortBtn
                isNameAscending={isNameAscending}
                setIsNameAscending={setIsNameAscending}
              />
            </TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">1h %</TableHead>
            <TableHead className="text-center">24h %</TableHead>
            <TableHead className="text-center">7d %</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead className="text-right">Volume(24h)</TableHead>
            <TableHead className="text-center">Last 7 Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCoinInfo?.map((coin, index) => (
            <CoinRow coin={coin} key={index} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default CryptoTable;
