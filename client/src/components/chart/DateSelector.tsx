import { Days } from "types/marketTypes";

function DateSelector({
  setDays,
}: {
  setDays: React.Dispatch<React.SetStateAction<Days>>;
}) {
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDays(30);
  };

  return (
    <select
      name="days"
      id="days-selector"
      className="bg-none text-black"
      onChange={handleDayChange}
    >
      <option value="30">30D</option>
      <option value="60">60D</option>
    </select>
  );
}
export default DateSelector;
