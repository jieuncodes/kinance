import { GekcoOHLC } from "types/marketTypes";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinOHLC } from "services/apiService";
import { ChartContainer } from "styles/chart";
import CandlestickChart from "./CandleStickChart";
import { SelectorBox } from "../../styles/coinInfoRow";
import { useState } from "react";

function PriceChart({ id }: { id: string | undefined }) {
  const { isLoading, error, data } = useQuery<GekcoOHLC | null>({
    queryKey: ["OHLC", id],
    queryFn: () => fetchCoinOHLC({ id: id, currency: "usd", days: 30 }),
  });
  const [currDay, setCurrDay] = useState<number>(30);
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setCurrDay(Number(event.target.accessKey));
  };
  return (
    <>
      <select
        name="days"
        id="days-selector"
        className="bg-none text-black"
        onChange={handleDayChange}
      >
        <option value="30">30D</option>
        <option value="60">60D</option>
      </select>

      <ChartContainer>
        <CandlestickChart data={data} />
      </ChartContainer>
    </>
  );
}
export default PriceChart;
