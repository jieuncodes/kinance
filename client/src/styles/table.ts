import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const TableNavUl = tw.ul`flex flex-row gap-3 font-light text-slate-500 my-6  box-border`;

export const TableNavLi = tw(
  motion.div
)`flex justify-center align-middle w-fit text-center border-b-2 border-transparent p-2 box-border `;

export const TableHeaderBox = tw.div`flex flex-row justify-between items-center`;
