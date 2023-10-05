import { useState } from "react";
import { useParams } from "react-router-dom";
import { Currencies } from "types/marketTypes";
import CoinDetails from "./CoinDetail";

function CoinPage() {
  const { id: coinId } = useParams();

  const [currency, setCurrency] = useState<Currencies>("usd");

  if (!coinId) {
    // TODO: fallback UI
    return null;
  }

  return <CoinDetails coinId={coinId} currency={currency} />;
}

export default CoinPage;
