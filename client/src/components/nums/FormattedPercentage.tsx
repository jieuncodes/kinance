import { Icons } from "components/Icons";

export const FormattedPercentage = (value: number | undefined) => {
  if (value === undefined) return null;
  if (value > 0) {
    return (
      <div className="text-[rgb(63,137,124)] flex flex-row">
        <Icons.triangle className="w-2 pb-1 -pt-1" fill="rgb(63,137,124)" />
        <span className="ml-1">{value.toFixed(2) + "%"}</span>
      </div>
    );
  } else {
    return (
      <div className="text-[rgb(190,79,92)]  flex flex-row">
        <Icons.triangle className="rotate-180 w-2" fill="rgb(190,79,92)" />
        <span className="ml-1">{Math.abs(value).toFixed(2) + "%"}</span>
      </div>
    );
  }
};
