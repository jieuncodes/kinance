import { D3OHLC } from "types/marketTypes";

export const priceColor = (ohlc: D3OHLC | undefined) =>
  ohlc?.close! > ohlc?.open! ? "text-brightgain" : "text-brightloss";
