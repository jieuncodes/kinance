import { Sparklines, SparklinesLine } from "react-sparklines";

function CoinSparkLine({ prices }: { prices: number[] }) {
  return (
    <>
      <Sparklines data={prices}>
        <SparklinesLine
          color={
            prices[0] > prices[prices.length - 1]
              ? "rgb(190,79,92)"
              : "rgb(79,190,92)"
          }
          style={{ fill: "none", strokeWidth: 3 }}
        />
      </Sparklines>
    </>
  );
}
export default CoinSparkLine;
