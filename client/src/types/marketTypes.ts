export interface CoinInfo {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  date_added: string;
  tags: string[];
  platform: null;
  self_reported_circulating_supply: null;
  self_reported_market_cap: null;

  quote: {
    USD?: QuoteCurrency;
    BTC?: QuoteCurrency;
  };
}

interface QuoteCurrency {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  last_updated: string;
}

export type ReqInfo =
  | "latest"
  | "historical"
  | "info"
  | "convert"
  | "map"
  | "search"
  | "most-visited"
  | "gainers-losers";

export type Endpoint =
  | "listings"
  | "metadata"
  | "quotes"
  | "market-pairs"
  | "airdrops"
  | "trending"
  | "ohlcv"
  | "cateogries"
  | "price-performance-stats";
