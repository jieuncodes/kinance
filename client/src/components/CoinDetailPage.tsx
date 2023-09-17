import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CoinDetailPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  console.log("id", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/coin/${id}`);
        console.log("response", response);
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(coinData)}</div>;
}

export default CoinDetailPage;
