import { TableCell } from "components/ui/Table";
import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const TableNavUl = tw.ul`flex flex-row gap-3 font-light text-slate-500 my-6  box-border`;

export const TableNavLi = tw(
  motion.div,
)`flex justify-center align-middle w-fit text-center border-b-2 border-transparent p-2 box-border `;

export const TableNavBox = tw.div`flex flex-row justify-between items-center`;

export const ColCoinName = tw.span`ml-1`;
export const ColCoinSymbol = tw.span`ml-2 opacity-30"`;

export const CoinNameCell = tw(
  TableCell,
)`grid grid-cols-[1fr_5fr] items-center whitespace-nowrap `;

export const CoinLogoIcon = tw.img`mr-2 mt-[3px] h-6 w-6`;
