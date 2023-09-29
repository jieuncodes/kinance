import { useState } from "react";
import { useParams } from "react-router-dom";
import { Currencies } from "types/marketTypes";
import { CoinProvider } from "providers/CoinProvider";
import CoinDetails from "./CoinDetail";

function CoinPage() {
  const { id: coinId } = useParams();

  const [currency, setCurrency] = useState<Currencies>("usd");

  return (
    <CoinProvider coinId={coinId} currency={currency}>
      <CoinDetails currency={currency} />
    </CoinProvider>
  );
}

export default CoinPage;
