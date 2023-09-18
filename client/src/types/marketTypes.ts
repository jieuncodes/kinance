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

export interface GekcoListCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
  sparkline_in_7d: { price: number[] };
}

export type KinanceServiceMarkets = "usd" | "btc" | "krw" | "eur";
