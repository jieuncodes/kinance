import { useEffect, useState } from "react";
import { getMarketData } from "../services/binanceApi";

const Market = () => {
  const [marketData, setMarketData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarketData();
        setMarketData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spot Trading Markets</h1>
      <ul>
        {marketData.map((market, index) => (
          <li key={index}>{market.symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
