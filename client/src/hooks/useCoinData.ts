import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails, fetchCoinOHLC } from "services/apiService";
import { Currencies, GekcoOHLC } from "types/marketTypes";

export function useCoinData(coinId: string, currency: Currencies) {
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

  return {
    isCoinMetaDataLoading,
    coinMetaDataError,
    coinMetaData,
    isOHLCDataLoading,
    OHLCDataError,
    OHLCData,
  };
}
