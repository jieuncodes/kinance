import axios from "axios";

export const getMarketData = async () => {
  try {
    const response = await axios.get(
      "https://api.binance.com/api/v3/exchangeInfo"
    );
    console.log("###response", response.data.symbols);
    return response.data.symbols;
  } catch (error) {
    console.error("Error fetching market data", error);
    throw error;
  }
};
