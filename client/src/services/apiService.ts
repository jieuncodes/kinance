import axios from "axios";
import { MarketData } from "../../../server/src/type/marketTypes";

export const fetchMarketData = async (): Promise<MarketData> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_NODE_ENDPOINT!}/api/market-data`
    );
    const data = await response.data;
    console.log("data", data);
    return data;
  } catch (error) {
    console.error("Error fetching market data", error);
    throw error;
  }
};
