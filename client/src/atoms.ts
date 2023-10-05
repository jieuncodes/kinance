import { atom } from "recoil";
import { D3OHLC } from "types/marketTypes";

export const currPointerState = atom<D3OHLC | undefined>({
  key: "currPointerState",
  default: {
    date: 0,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
  },
});

export const currPointerPriceState = atom<number>({
  key: "currPointerPriceState",
  default: 0,
});

export const currPointerDateState = atom<Date>({
  key: "currPointerDateState",
  default: new Date(),
});
