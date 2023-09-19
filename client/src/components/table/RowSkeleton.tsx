import { Icons } from "components/Icons";
import { TableCell, TableRow } from "../ui/Table";
import { CoinNameCell, ColCoinName, ColCoinSymbol } from "styles/table";
import { Skeleton } from "components/ui/Skeleton";

function RowSkeleton() {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <tr
            className="bg-blue-950/50 transition-colors hover:bg-blue-950 data-[state=selected]:bg-muted"
            key={index}
          >
            <TableCell>
              <Skeleton className="h-6 w-6 rounded-full" />
            </TableCell>
            <TableCell className="text-center">
              <Skeleton className="h-6 w-6 rounded-full" />
            </TableCell>
            <CoinNameCell>
              <Skeleton className="h-6 w-6 rounded-full" />
              <div className="flex flex-row">
                <Skeleton className="mr-3 h-4 w-20" />
                <Skeleton className="h-4 w-10" />
              </div>
            </CoinNameCell>
            <TableCell>
              <Skeleton className="h-4 w-20" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-30 h-4" />
            </TableCell>
            <TableCell>
              <Skeleton className=" w-30 h-4" />
            </TableCell>
            <TableCell className="p-2 pr-4">
              <Skeleton className="w-30 h-4" />
            </TableCell>
          </tr>
        ))}
    </>
  );
}

export default RowSkeleton;
