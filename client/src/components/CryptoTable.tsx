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

function CryptoTable() {
  return (
    <>
      <TableHeaderBox>
        <TableNav />
        <SearchBar />
      </TableHeaderBox>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Instrument</TableHead>
            <TableHead>Last Price</TableHead>
            <TableHead>24H Change</TableHead>
            <TableHead>24H High</TableHead>
            <TableHead>24H Low</TableHead>
            <TableHead>24H Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coins.map((coin, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{}</TableCell>
              {/* <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell> */}
            </TableRow>
          ))}
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
