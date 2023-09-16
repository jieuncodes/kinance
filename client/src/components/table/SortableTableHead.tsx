import SortBtn from "components/btns/SortBtn";
import { TableHead } from "components/ui/Table";
import { sortData } from "lib/utils";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { CoinInfo } from "types/marketTypes";

interface SortableTableHeadProps {
  colName: string;
  marketData: CoinInfo[] | undefined;
  setSortedData: Dispatch<SetStateAction<CoinInfo[] | null>>;
}

function SortableTableHead({
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
      key: colName,
    });

    setSortedData(sortedData);
  }, [marketData, isAscending]);

  return (
    <TableHead className="flex flex-row items-center gap-2">
      <span>{colName}</span>
      <SortBtn isAscending={isAscending} setIsAscending={setIsAscending} />
    </TableHead>
  );
}

export default SortableTableHead;
