import { TableHeaderBox } from "styles/table";
import SearchBar from "./SearchBar";
import TableNav from "./TableNav";

function CryptoTable() {
  return (
    <>
      <TableHeaderBox>
        <TableNav />
        <SearchBar />
      </TableHeaderBox>
    </>
  );
}
export default CryptoTable;
