import { Currencies, GekcoCoinDetail, GekcoOHLC } from "types/marketTypes";
import { createContext, ReactNode } from "react";
import { useCoinData } from "hooks/useCoinData";

type ChartContextType = {
  isCoinMetaDataLoading: boolean;
  coinMetaDataError: null | unknown;
  coinMetaData: GekcoCoinDetail | undefined | null;
  isOHLCDataLoading: boolean;
  OHLCDataError: null | unknown;
  OHLCData: GekcoOHLC | undefined | null;
};

const initialState: ChartContextType = {
  isCoinMetaDataLoading: true,
  coinMetaDataError: null,
  coinMetaData: null,
  isOHLCDataLoading: true,
  OHLCDataError: null,
  OHLCData: null,
};

export const ChartContext = createContext<ChartContextType>(initialState);

export function CoinProvider({
  children,
  coinId,
  currency,
}: {
  children: ReactNode;
  coinId: string;
  currency: Currencies;
}) {
  const data = useCoinData(coinId, currency);
  return <ChartContext.Provider value={data}>{children}</ChartContext.Provider>;
}
