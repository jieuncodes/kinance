import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails, fetchCoinOHLC } from "services/apiService";
import { Currencies, GekcoCoinDetail, GekcoOHLC } from "types/marketTypes";
import { createContext, ReactNode } from "react";

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
  coinId: string | undefined;
  currency: Currencies;
}) {
  console.log("provider");
  const {
    isLoading: isCoinMetaDataLoading,
    error: coinMetaDataError,
    data: coinMetaData,
  } = useQuery({
    queryKey: ["fetchCoinDetails", coinId],
    queryFn: () => fetchCoinDetails(coinId),
  });

  const {
    isLoading: isOHLCDataLoading,
    error: OHLCDataError,
    data: OHLCData,
  } = useQuery<GekcoOHLC | undefined>({
    queryKey: ["OHLC", coinId],
    queryFn: () => fetchCoinOHLC({ id: coinId, currency, days: 30 }),
  });

  return (
    <ChartContext.Provider
      value={{
        isCoinMetaDataLoading,
        coinMetaDataError,
        coinMetaData,
        isOHLCDataLoading,
        OHLCDataError,
        OHLCData,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}
