import TableNav from "./TableNav";
import CryptoTableBody from "./CryptoTableBody";
import { useState } from "react";
import { KinanceServiceMarkets } from "types/marketTypes";

function CryptoTable() {
  const [currency, setCurrency] = useState<KinanceServiceMarkets>("usd");

  return (
    <>
      <TableNav setCurrency={setCurrency} />
      <CryptoTableBody currency={currency} />
    </>
  );
}
export default CryptoTable;
