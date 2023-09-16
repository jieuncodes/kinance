import axios from "axios";
import { CoinInfo } from "types/marketTypes";

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