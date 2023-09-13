export const getMarketData = async () => {
  try {
    const response = await axios.get(
      "https://api.binance.com/api/v3/exchangeInfo"
    );
    return response.data.symbols;
  } catch (error) {
    console.error("Error fetching market data", error);
    throw error;
  }
};
