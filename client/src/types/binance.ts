export interface BinanceSymbol {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: string[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  allowTrailingStop: boolean;
  cancelReplaceAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: BinanceSymbolFilter[];
  permissions: string[];
  defaultSelfTradePreventionMode: string;
  allowedSelfTradePreventionModes: string[];
}
interface PriceFilter {
  filterType: "PRICE_FILTER";
  minPrice: string;
  maxPrice: string;
  tickSize: string;
}

interface LotSize {
  filterType: "LOT_SIZE";
  minQty: string;
  maxQty: string;
  stepSize: string;
}

interface IcebergParts {
  filterType: "ICEBERG_PARTS";
  limit: number;
}

interface MarketLotSize {
  filterType: "MARKET_LOT_SIZE";
  minQty: string;
  maxQty: string;
  stepSize: string;
}

interface TrailingDelta {
  filterType: "TRAILING_DELTA";
  minTrailingAboveDelta: number;
  maxTrailingAboveDelta: number;
  minTrailingBelowDelta: number;
  maxTrailingBelowDelta: number;
}

interface PercentPriceBySide {
  filterType: "PERCENT_PRICE_BY_SIDE";
  bidMultiplierUp: string;
  bidMultiplierDown: string;
  askMultiplierUp: string;
  askMultiplierDown: string;
  avgPriceMins: number;
}

interface Notional {
  filterType: "NOTIONAL";
  minNotional: string;
  applyMinToMarket: boolean;
  maxNotional: string;
  applyMaxToMarket: boolean;
  avgPriceMins: number;
}

interface MaxNumOrders {
  filterType: "MAX_NUM_ORDERS";
  maxNumOrders: number;
}

interface MaxNumAlgoOrders {
  filterType: "MAX_NUM_ALGO_ORDERS";
  maxNumAlgoOrders: number;
}

type BinanceSymbolFilter =
  | PriceFilter
  | LotSize
  | IcebergParts
  | MarketLotSize
  | TrailingDelta
  | PercentPriceBySide
  | Notional
  | MaxNumOrders
  | MaxNumAlgoOrders;
