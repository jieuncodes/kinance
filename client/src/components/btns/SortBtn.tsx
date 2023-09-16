import { useState } from "react";
import { Icons } from "../Icons";

function SortBtn({ initAscendingState = true }) {
  const [isAscending, setIsAscending] = useState(initAscendingState);
  return (
    <div
      onClick={() => setIsAscending(!isAscending)}
      className="w-fit flex flex-col items-center space-y-[-1rem] mt-[1px]"
    >
      <Icons.triangle className=" w-2 " fill={isAscending ? "none" : "white"} />
      <Icons.triangle
        className="w-2 rotate-180 items-start"
        fill={isAscending ? "white" : "none"}
      />
    </div>
  );
}

export default SortBtn;
