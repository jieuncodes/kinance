function DateSelector({
  setCurrDay,
}: {
  setCurrDay: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrDay(Number(event.target.accessKey));
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
