import { D3OHLC, GekcoOHLC } from "types/marketTypes";

export const transformToD3OHLC = (data: GekcoOHLC): D3OHLC[] => {
  return data.map((item) => ({
    date: item[0],
    open: item[1],
    high: item[2],
    low: item[3],
    close: item[4],
  }));
};
