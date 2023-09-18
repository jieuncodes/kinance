import axios from "axios";
import { validateEnvVariable } from "lib/utils";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { fetchSparkLine } from "services/apiService";
import { CoinInfo } from "types/marketTypes";

function CoinSparkLine({ coin }: { coin: CoinInfo }) {
  const [coinSparkLine, setCoinSparkLine] = useState<number[] | null>(null);

  validateEnvVariable(
    process.env.REACT_APP_SERVER_ENDPOINT,
    "REACT_APP_SERVER_ENDPOINT",
  );

  useEffect(() => {
    const getCoinSparkLineData = async () => {
      try {
        const data = await fetchSparkLine(coin.name.toLowerCase());
        data && setCoinSparkLine(data);
      } catch (error) {
        console.error("Error fetching coin sparkline from the server");
      }
    };
    getCoinSparkLineData();
  }, []);
  return (
    <>
      {coinSparkLine && (
        <Sparklines data={coinSparkLine}>
          <SparklinesLine
            color={
              coinSparkLine[0] > coinSparkLine[coinSparkLine.length - 1]
                ? "rgb(190,79,92))"
                : "rgb(79,190,92)"
            }
            style={{ fill: "none", strokeWidth: 3 }}
          />
        </Sparklines>
      )}
    </>
  );
}
export default CoinSparkLine;
