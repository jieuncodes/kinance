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

function CryptoTable() {
  const {
    data: CoinInfo,
    error,
    isLoading,
  } = useQuery<CoinInfo[]>("CoinInfo", fetchMarket);

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
              <SortBtn initAscendingState={true} />
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
          {CoinInfo?.map((coin, index) => (
            <CoinRow coin={coin} key={index} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
export default CryptoTable;
