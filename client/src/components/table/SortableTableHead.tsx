import SortBtn from "components/btns/SortBtn";
import { TableHead } from "components/ui/Table";
import { sortData } from "lib/utils";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { GekcoListCoin } from "types/marketTypes";

interface SortableTableHeadProps {
  colKey: string;
  colName: string;
  marketData: GekcoListCoin[] | undefined;
  setSortedData: Dispatch<SetStateAction<GekcoListCoin[] | null>>;
}

function SortableTableHead({
  colKey,
  colName,
  marketData,
  setSortedData,
}: SortableTableHeadProps) {
  const [isAscending, setIsAscending] = useState<boolean | null>(null);

  useEffect(() => {
    if (!marketData || isAscending === null) return;
    const sortedData = sortData({
      data: marketData,
      isAscending,
      key: colKey,
    });

    setSortedData(sortedData);
  }, [marketData, isAscending]);
  return (
    <TableHead>
      <div
        className={`" relative flex flex-row items-center gap-2 ${
          colName === "Volume(24h)" && "justify-end"
        }`}
      >
        <span className="whitespace-nowrap">{colName}</span>
        <SortBtn isAscending={isAscending} setIsAscending={setIsAscending} />
      </div>
    </TableHead>
  );
}

export default SortableTableHead;
