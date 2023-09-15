export interface MarketData {
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
    USD: {
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
    };
    BTC: {
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
    };
  };
}
export type endpoint = {
  latest: string;
  historical: string;
  info: string;
  convert: string;
  map: string;
  search: string;
  "most-visited": string;
  "gainers-losers": string;
};
export type requireInfo = {
  listings: string;
  metadata: string;
  quotes: string;
  "market-pairs": string;
  airdrops: string;
  trending: string;
  ohlcv: string;
  cateogries: string;
  "price-performance-stats": string;
};
