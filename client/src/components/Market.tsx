import { useEffect, useState } from "react";
import { getMarketData } from "../services/binanceApi";
import { useQuery } from "react-query";
import { BinanceSymbol } from "../types/binance";

const Market = () => {
  const {
    data: marketData,
    error,
    isLoading,
  } = useQuery<BinanceSymbol[]>("marketData", getMarketData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  //TODO: show 10 and add pagination
  return (
    <div>
      <h1>Spot Trading Markets</h1>
      <ul>
        {marketData?.slice(0, 10).map((market, index) => (
          <li key={index}>{market.symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
