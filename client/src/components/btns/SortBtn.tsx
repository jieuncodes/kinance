import { Dispatch, SetStateAction, useState } from "react";
import { Icons } from "../Icons";

interface SortedBtnProps {
  isNameAscending?: boolean | null;
  setIsNameAscending: Dispatch<SetStateAction<boolean | null>>;
}

function SortBtn({
  isNameAscending = null,
  setIsNameAscending,
}: SortedBtnProps) {
  return (
    <div
      onClick={() => setIsNameAscending(!isNameAscending)}
      className="w-fit flex flex-col items-center space-y-[-1rem] mt-[1px]"
    >
      <Icons.triangle
        className=" w-2 "
        fill={isNameAscending ? "none" : "white"}
      />
      <Icons.triangle
        className="w-2 rotate-180 items-start"
        fill={isNameAscending ? "white" : "none"}
      />
    </div>
  );
}

export default SortBtn;
