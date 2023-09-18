import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const TableNavUl = tw.ul`flex flex-row gap-3 font-light text-slate-500 my-6  box-border`;

export const TableNavLi = tw(
  motion.div,
)`flex justify-center align-middle w-fit text-center border-b-2 border-transparent p-2 box-border `;

export const TableHeaderBox = tw.div`flex flex-row justify-between items-center`;

export const USD24Volume = tw.div`text-xs font-light opacity-50`;
export const ColCoinName = tw.span`ml-1 mt-2`;
export const ColCoinSymbol = tw.span`ml-2 mt-2 opacity-50"`;
