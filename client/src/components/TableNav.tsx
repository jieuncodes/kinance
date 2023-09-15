import { TableNavLi, TableNavUl } from "styles/table";

function TableNav() {
  return (
    <>
      <TableNavUl>
        <TableNavLi>Favorites</TableNavLi>
        <TableNavLi>All</TableNavLi>
        <TableNavLi>USD</TableNavLi>
        <TableNavLi>USDT</TableNavLi>
        <TableNavLi>BTC</TableNavLi>
        <TableNavLi>EUR</TableNavLi>
      </TableNavUl>
    </>
  );
}

export default TableNav;
