import axios from "axios";
import { CoinInfo, GekcoCoinDetail, GekcoListCoin } from "types/marketTypes";

export const fetchMarket = async (): Promise<CoinInfo[]> => {
  try {
    const requireInfo = "latest";
    const endpoint = "listings";

    const url = `${process.env
      .REACT_APP_NODE_ENDPOINT!}/api/market-data?endpoint=${endpoint}&requireInfo=${requireInfo}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching market data", error);
    throw error;
  }
};

export const fetchCoinDetails = async (
  id: string,
): Promise<GekcoCoinDetail | undefined> => {
  console.log("fetchCoinDetails", fetchCoinDetails);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_ENDPOINT!}/api/coinDetail/${id}`,
    );
    if (response.status !== 200) {
      console.error("Error fetching coin detail from the server.");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching coin sparkline from the server.");
  }
};

export const fetchDetailedMarketData = async ({
  currency,
}: {
  currency: string;
}): Promise<GekcoListCoin[]> => {
  try {
    const url = `${process.env
      .REACT_APP_SERVER_ENDPOINT!}/api/detailed-coins-data?currency=${currency}`;
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching detailed market data", error);
    throw error;
  }
};
