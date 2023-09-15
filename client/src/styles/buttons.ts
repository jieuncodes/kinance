import tw from "tailwind-styled-components";

import { Button } from "components/ui/Button";

export const NavBtns = tw.div`flex gap-3 mt-6 mb-6`;
export const RoundBtn = tw(
  Button
)`rounded-full h-8 border border-transparent hover:border-sky-500 box-border hover:text-sky-500`;
